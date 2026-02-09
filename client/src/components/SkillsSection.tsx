import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { skills, expertise, type Skill } from "@/data/skillsData";

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const [ref, inView] = useScrollAnimation({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="group relative bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="relative mb-4">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300">
          <img
            src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${skill.icon}.svg`}
            alt={skill.name}
            className="w-10 h-10"
            style={{ filter: 'grayscale(100%)', opacity: 0.7 }}
            onLoad={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.filter = 'none';
              img.style.opacity = '1';
            }}
          />
        </div>
        <div 
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
          style={{ backgroundColor: skill.color }}
        ></div>
      </div>
      <h4 className="text-sm font-semibold text-gray-800 text-center font-inter group-hover:text-primary transition-colors duration-300">
        {skill.name}
      </h4>
    </motion.div>
  );
};

const ExpertiseCard = ({ icon, name }: { icon: string; name: string }) => {
  return (
    <motion.div
      className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="bg-blue-50 p-3 rounded-md mr-3">
        <i className={`${icon} text-primary`}></i>
      </div>
      <span className="font-medium text-gray-700 font-inter text-sm">{name}</span>
    </motion.div>
  );
};

const SkillsSection = () => {
  const [titleRef, titleInView] = useScrollAnimation();
  const [expertiseRef, expertiseInView] = useScrollAnimation({ threshold: 0.1 });

  // Group skills by category
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="section-padding bg-gray-50 relative">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            ref={titleRef}
            className="text-primary font-medium tracking-wider font-inter text-sm uppercase block mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            My Expertise
          </motion.span>
          <h2 className="section-title">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6"></div>
          <p className="section-subtitle mx-auto text-center max-w-3xl">
            I've worked with a range of technologies in the web development world,
            from frontend to backend, focusing on creating efficient and user-friendly solutions.
          </p>
        </div>

        {/* Skills Grid by Category */}
        <div className="space-y-12 mb-16">
          {categories.map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            return (
              <div key={category}>
                <h3 className="text-2xl font-merriweather font-bold text-gray-800 mb-6 text-center">
                  {category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {categorySkills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Expertise Section */}
        <motion.div
          ref={expertiseRef}
          initial={{ opacity: 0, y: 30 }}
          animate={expertiseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 rounded-xl shadow-md border border-gray-100 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="mr-4 bg-blue-50 p-3 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-2xl font-merriweather font-bold text-gray-800">
              Core Expertise
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {expertise.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={expertiseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <ExpertiseCard icon={item.icon} name={item.name} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

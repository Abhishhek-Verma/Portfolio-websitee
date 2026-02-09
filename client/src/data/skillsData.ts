export interface Skill {
  name: string;
  icon: string;
  color: string;
  category: string;
  iconType?: 'devicon' | 'simple';
}

export const skills: Skill[] = [
  // Programming Languages
  { name: "Java", icon: "java", color: "#007396", category: "Programming Languages", iconType: "devicon" },
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E", category: "Programming Languages", iconType: "devicon" },
  { name: "C", icon: "c", color: "#A8B9CC", category: "Programming Languages", iconType: "devicon" },
  { name: "HTML5", icon: "html5", color: "#E34F26", category: "Programming Languages", iconType: "devicon" },
  { name: "CSS3", icon: "css3", color: "#1572B6", category: "Programming Languages", iconType: "devicon" },
  
  // Web Technologies & Frameworks
  { name: "React", icon: "react", color: "#61DAFB", category: "Web Technologies", iconType: "devicon" },
  { name: "Node.js", icon: "nodejs", color: "#339933", category: "Web Technologies", iconType: "devicon" },
  { name: "Express", icon: "express", color: "#000000", category: "Web Technologies", iconType: "devicon" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4", category: "Web Technologies", iconType: "devicon" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6", category: "Web Technologies", iconType: "devicon" },
  { name: "Vite", icon: "vite", color: "#646CFF", category: "Web Technologies", iconType: "devicon" },
  
  // Databases & Tools
  { name: "MongoDB", icon: "mongodb", color: "#47A248", category: "Database & Tools", iconType: "devicon" },
  { name: "MySQL", icon: "mysql", color: "#4479A1", category: "Database & Tools", iconType: "devicon" },
  { name: "PostgreSQL", icon: "postgresql", color: "#4169E1", category: "Database & Tools", iconType: "devicon" },
  { name: "Git", icon: "git", color: "#F05032", category: "Database & Tools", iconType: "devicon" },
  { name: "GitHub", icon: "github", color: "#181717", category: "Database & Tools", iconType: "devicon" },
  { name: "Supabase", icon: "supabase", color: "#3FCF8E", category: "Database & Tools", iconType: "devicon" },
  
  // AI & APIs
  { name: "OpenAI", icon: "openai", color: "#412991", category: "AI & APIs", iconType: "simple" },
];

export const expertise = [
  { name: "Data Structures & Algorithms", icon: "fas fa-code" },
  { name: "Operating Systems", icon: "fas fa-laptop-code" },
  { name: "DBMS", icon: "fas fa-database" },
  { name: "OOPS in Java", icon: "fas fa-trophy" },
];

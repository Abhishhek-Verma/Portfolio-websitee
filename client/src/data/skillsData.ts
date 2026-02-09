export interface Skill {
  name: string;
  icon: string;
  color: string;
  category: string;
}

export const skills: Skill[] = [
  // Programming Languages
  { name: "Java", icon: "java", color: "#007396", category: "Programming Languages" },
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E", category: "Programming Languages" },
  { name: "C", icon: "c", color: "#A8B9CC", category: "Programming Languages" },
  { name: "HTML5", icon: "html5", color: "#E34F26", category: "Programming Languages" },
  { name: "CSS3", icon: "css3", color: "#1572B6", category: "Programming Languages" },
  
  // Web Technologies & Frameworks
  { name: "React", icon: "react", color: "#61DAFB", category: "Web Technologies" },
  { name: "Node.js", icon: "nodedotjs", color: "#339933", category: "Web Technologies" },
  { name: "Express", icon: "express", color: "#000000", category: "Web Technologies" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4", category: "Web Technologies" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6", category: "Web Technologies" },
  { name: "Vite", icon: "vite", color: "#646CFF", category: "Web Technologies" },
  
  // Databases & Tools
  { name: "MongoDB", icon: "mongodb", color: "#47A248", category: "Database & Tools" },
  { name: "MySQL", icon: "mysql", color: "#4479A1", category: "Database & Tools" },
  { name: "PostgreSQL", icon: "postgresql", color: "#4169E1", category: "Database & Tools" },
  { name: "Git", icon: "git", color: "#F05032", category: "Database & Tools" },
  { name: "GitHub", icon: "github", color: "#181717", category: "Database & Tools" },
  { name: "Supabase", icon: "supabase", color: "#3FCF8E", category: "Database & Tools" },
  
  // AI & APIs
  { name: "OpenAI", icon: "openai", color: "#412991", category: "AI & APIs" },
];

export const expertise = [
  { name: "Data Structures & Algorithms", icon: "fas fa-code" },
  { name: "Operating Systems", icon: "fas fa-laptop-code" },
  { name: "DBMS", icon: "fas fa-database" },
  { name: "OOPS in Java", icon: "fas fa-trophy" },
];

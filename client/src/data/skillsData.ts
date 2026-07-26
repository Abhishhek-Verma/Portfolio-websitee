export interface Skill {
  name: string;
  icon: string;
  color: string;
  category: string;
  iconType?: 'devicon' | 'simple' | 'url';
}

export const skills: Skill[] = [
  // Programming Languages
  { name: "Java", icon: "java", color: "#007396", category: "Programming Languages", iconType: "devicon" },
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E", category: "Programming Languages", iconType: "devicon" },
  { name: "HTML5", icon: "html5", color: "#E34F26", category: "Programming Languages", iconType: "devicon" },
  { name: "CSS3", icon: "css3", color: "#1572B6", category: "Programming Languages", iconType: "devicon" },

  // Web Technologies
  { name: "React", icon: "react", color: "#61DAFB", category: "Web Technologies", iconType: "devicon" },
  { name: "Node.js", icon: "nodejs", color: "#339933", category: "Web Technologies", iconType: "devicon" },
  { name: "Express.js", icon: "express", color: "#000000", category: "Web Technologies", iconType: "devicon" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4", category: "Web Technologies", iconType: "devicon" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6", category: "Web Technologies", iconType: "devicon" },
  { name: "Vite", icon: "vitejs", color: "#646CFF", category: "Web Technologies", iconType: "devicon" },

  // Database & Storage
  { name: "MongoDB", icon: "mongodb", color: "#47A248", category: "Database & Storage", iconType: "devicon" },
  { name: "MySQL", icon: "mysql", color: "#4479A1", category: "Database & Storage", iconType: "devicon" },
  { name: "PostgreSQL", icon: "postgresql", color: "#4169E1", category: "Database & Storage", iconType: "devicon" },
  { name: "Supabase", icon: "supabase", color: "#3FCF8E", category: "Database & Storage", iconType: "devicon" },
  { name: "Redis", icon: "redis", color: "#DC382D", category: "Database & Storage", iconType: "devicon" },
  { name: "Pinecone", icon: "pinecone", color: "#000000", category: "Database & Storage", iconType: "simple" },

  // Cloud, DevOps & Infrastructure
  { name: "Docker", icon: "docker", color: "#2496ED", category: "Cloud, DevOps & Infrastructure", iconType: "devicon" },
  { name: "AWS", icon: "amazonaws", color: "#FF9900", category: "Cloud, DevOps & Infrastructure", iconType: "simple" },
  { name: "Git", icon: "git", color: "#F05032", category: "Cloud, DevOps & Infrastructure", iconType: "devicon" },
  { name: "GitHub", icon: "github", color: "#181717", category: "Cloud, DevOps & Infrastructure", iconType: "devicon" },
  { name: "GitHub Actions", icon: "githubactions", color: "#2088FF", category: "Cloud, DevOps & Infrastructure", iconType: "simple" },
  { name: "CI/CD", icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%232563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12c-2-2.5-4-4-6.5-4A4.5 4.5 0 0 0 1 12.5 4.5 4.5 0 0 0 5.5 17c2.5 0 4.5-1.5 6.5-4zm0 0c2 2.5 4 4 6.5 4a4.5 4.5 0 0 0 4.5-4.5 4.5 4.5 0 0 0-4.5-4.5c-2.5 0-4.5 1.5-6.5 4z"/></svg>', color: "#2563EB", category: "Cloud, DevOps & Infrastructure", iconType: "url" },
  { name: "Prometheus", icon: "prometheus", color: "#E6522C", category: "Cloud, DevOps & Infrastructure", iconType: "devicon" },
  { name: "Grafana", icon: "grafana", color: "#F46800", category: "Cloud, DevOps & Infrastructure", iconType: "devicon" },
  { name: "Postman", icon: "postman", color: "#FF6C37", category: "Cloud, DevOps & Infrastructure", iconType: "devicon" },

  // AI / LLM Engineering
  { name: "OpenAI", icon: "openai", color: "#412991", category: "AI / LLM Engineering", iconType: "simple" },
  { name: "LangChain", icon: "langchain", color: "#1C3C3C", category: "AI / LLM Engineering", iconType: "simple" },
  { name: "Gemini API", icon: "googlegemini", color: "#8E75B2", category: "AI / LLM Engineering", iconType: "simple" },
  { name: "Retrieval-Augmented Generation (RAG)", icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%232563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6a8 8 0 0 1 12 0"/><path d="M21 21l-4.35-4.35"/><circle cx="11" cy="11" r="6"/><path d="M11 8v6M8 11h6"/></svg>', color: "#2563EB", category: "AI / LLM Engineering", iconType: "url" },
  { name: "Vector Search", icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%232563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="3" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="21"/><line x1="3" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="21" y2="12"/></svg>', color: "#2563EB", category: "AI / LLM Engineering", iconType: "url" },
  { name: "Embeddings", icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%232563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M10 6.5h4M10 17.5h4M6.5 10v4M17.5 10v4"/></svg>', color: "#2563EB", category: "AI / LLM Engineering", iconType: "url" },
  { name: "Semantic Search", icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%232563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><circle cx="11.5" cy="14.5" r="2.5"/><path d="M16 19l-2.7-2.7"/></svg>', color: "#2563EB", category: "AI / LLM Engineering", iconType: "url" },
  { name: "GitHub API", icon: "github", color: "#181717", category: "AI / LLM Engineering", iconType: "devicon" },
  { name: "REST APIs", icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%232563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="12" y1="4" x2="12" y2="20"/></svg>', color: "#2563EB", category: "AI / LLM Engineering", iconType: "url" },

  // Distributed Systems
  { name: "Consistent Hashing", icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%232563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="4" r="2" fill="%232563EB"/><circle cx="20" cy="12" r="2" fill="%232563EB"/><circle cx="12" cy="20" r="2" fill="%232563EB"/><circle cx="4" cy="12" r="2" fill="%232563EB"/></svg>', color: "#2563EB", category: "Distributed Systems", iconType: "url" },
  { name: "Distributed Caching", icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%232563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>', color: "#2563EB", category: "Distributed Systems", iconType: "url" },
  { name: "Cache Replication", icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%232563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="8" height="6" rx="1"/><rect x="14" y="4" width="8" height="6" rx="1"/><rect x="8" y="14" width="8" height="6" rx="1"/><path d="M6 10v2a2 2 0 0 0 2 2h0M18 10v2a2 2 0 0 1-2 2h0"/></svg>', color: "#2563EB", category: "Distributed Systems", iconType: "url" },
  { name: "Cluster Rebalancing", icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%232563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6"/><path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/><path d="M2.5 22v-6h6"/><path d="M2.66 8.43a10 10 0 0 1 .57 8.38l-5.67 5.67"/></svg>', color: "#2563EB", category: "Distributed Systems", iconType: "url" },
  { name: "Self-Healing Systems", icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%232563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>', color: "#2563EB", category: "Distributed Systems", iconType: "url" },
  { name: "WebSockets", icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%232563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16V4m0 0L3 8m4-4l4 4"/><path d="M17 8v12m0 0l4-4m-4 4l-4-4"/></svg>', color: "#2563EB", category: "Distributed Systems", iconType: "url" },
];

export const expertise = [
  { name: "Backend Development", icon: "fas fa-server" },
  { name: "Distributed Systems", icon: "fas fa-network-wired" },
  { name: "REST API Development", icon: "fas fa-code-branch" },
  { name: "AI & LLM Applications", icon: "fas fa-robot" },
  { name: "Retrieval-Augmented Generation (RAG)", icon: "fas fa-brain" },
  { name: "Vector Databases", icon: "fas fa-layer-group" },
  { name: "Cloud & DevOps", icon: "fas fa-cloud" },
  { name: "Docker & Containerization", icon: "fas fa-cubes" },
  { name: "Monitoring & Observability", icon: "fas fa-chart-line" },
  { name: "Database Design", icon: "fas fa-database" },
  { name: "Performance Optimization", icon: "fas fa-bolt" },
  { name: "Scalable System Architecture", icon: "fas fa-sitemap" },
];


export type SkillIconKey =
  | "react"
  | "html5"
  | "css"
  | "javascript"
  | "typescript"
  | "tailwind"
  | "node"
  | "express"
  | "java"
  | "php"
  | "python"
  | "mysql"
  | "postgresql"
  | "supabase"
  | "firebase"
  | "mongodb"
  | "git"
  | "github"
  | "vscode"
  | "figma"
  | "docker"
  | "postman";

export type SocialIconKey = "github" | "linkedin";

export const portfolioData = {
  brandInitials: "JM",
  sections: ["about", "experience", "skills", "projects", "contact"],
  hero: {
    availabilityText: "Available for work",
    typingCycles: [
      {
        prefix: "Hi, I'm ",
        highlight: "Jobert Mampusti",
      },
      {
        prefix: "I am a ",
        highlight: "Full Stack Web Developer",
      },
    ],
    summary:
      "I build precise, performant, and scalable web applications. Turning complex problems into elegant, functional interfaces.",
    primaryCta: {
      label: "View Projects",
      target: "projects",
    },
    secondaryCta: {
      label: "Contact Me",
      target: "contact",
    },
  },
  about: {
    sectionNumber: "01.",
    sectionTitle: "About Me",
    paragraphs: [
      "I am a Bachelor of Science in Information Technology (BSIT) graduate with a strong foundation in full-stack web development. I specialize in building responsive, user-centric applications from the ground up, utilizing modern technologies to solve real-world problems.",
      "My approach is rooted in clean code, pragmatic design, and a continuous desire to learn. Whether I'm crafting a fluid frontend interface or designing a robust backend architecture, my goal is always to deliver high-quality, maintainable software that provides genuine value.",
    ],
  },
  experience: {
    sectionNumber: "02.",
    sectionTitle: "Experience",
    items: [
      {
        title: "Co-Founder & Full-Stack Developer",
        period: "Feb 2025 - Current",
        organization: "Anehan",
        description:
          "Driven the end-to-end development of high-performance web applications using Next.js, React, and Firebase, while leveraging Cursor AI to accelerate development lifecycles and optimize complex codebases.",
        highlighted: true,
      },
      {
        title: "Academic Capstone Project",
        period: "Jul 2024 - Dec 2024",
        organization: "AgriCTRL+",
        description:
          "Developed a capstone project utilizing React, ICP blockchain, Express, and SQL.js to enable secure monitoring, data recording, and seamless traceability of rice stocks from procurement to distribution.",
        highlighted: false,
      },
      {
        title: "Web Developer Intern",
        period: "Apr 2023 - Aug 2023",
        organization: "Unified Internship Program Inc.",
        description:
          "Enhanced the Visvis Tours and Travels platform by designing responsive layouts and streamlining the Hotel Rooms section with Bootstrap CSS to effectively translate complex business requirements into intuitive data and pricing displays.",
        highlighted: false,
      },
    ],
  },
  skills: {
    sectionNumber: "03.",
    sectionTitle: "Skills",
    categories: [
      {
        title: "Frontend",
        items: [
          { name: "React", icon: "react", color: "#61DAFB" },
          { name: "HTML5", icon: "html5", color: "#E34F26" },
          { name: "CSS3", icon: "css", color: "#1572B6" },
          { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
          { name: "TypeScript", icon: "typescript", color: "#3178C6" },
          { name: "Tailwind", icon: "tailwind", color: "#06B6D4" },
        ] as Array<{ name: string; icon: SkillIconKey; color: string }>,
      },
      {
        title: "Backend",
        items: [
          { name: "Node.js", icon: "node", color: "#339933" },
          { name: "Express", icon: "express", color: "#FFFFFF" },
          { name: "Java", icon: "java", color: "#F89820" },
          { name: "PHP", icon: "php", color: "#777BB4" },
          { name: "Python", icon: "python", color: "#3776AB" },
        ] as Array<{ name: string; icon: SkillIconKey; color: string }>,
      },
      {
        title: "Database",
        items: [
          { name: "MySQL", icon: "mysql", color: "#4479A1" },
          { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
          { name: "Supabase", icon: "supabase", color: "#3ECF8E" },
          { name: "Firebase", icon: "firebase", color: "#FFCA28" },
          { name: "MongoDB", icon: "mongodb", color: "#47A248" },
        ] as Array<{ name: string; icon: SkillIconKey; color: string }>,
      },
      {
        title: "Tools",
        items: [
          { name: "Git", icon: "git", color: "#F05032" },
          { name: "GitHub", icon: "github", color: "#FFFFFF" },
          { name: "VS Code", icon: "vscode", color: "#007ACC" },
          { name: "Figma", icon: "figma", color: "#F24E1E" },
          { name: "Docker", icon: "docker", color: "#2496ED" },
          { name: "Postman", icon: "postman", color: "#FF6C37" },
        ] as Array<{ name: string; icon: SkillIconKey; color: string }>,
      },
    ],
  },
  projects: {
    sectionNumber: "04.",
    sectionTitle: "Projects",
    items: [
      {
        title: "AgriCTRL+",
        description:
          "AgriCTRL+ is a web platform for the NFA, digitizing rice supply chain tracking from procurement to distribution with real-time updates.",
        tags: ["React", "Express", "Tailwind CSS", "ICP"],
        github: "https://github.com/AgriCTRL/agrictrl",
        demo: "https://edyrl-2yaaa-aaaan-qmvha-cai.icp0.io",
      },
      {
        title: "Marci Metzger Home",
        description:
          "An improved clone of Marci Metzger's homepage with responsive layout and subtle UI animations. Includes responsive images.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/jobertmampusti/lp-assignment",
        demo: "https://lp-assignment-two.vercel.app",
      },
      {
        title: "Portfolio Website",
        description:
          "A personal portfolio website showcasing skills, projects, and professional information with a modern design.",
        tags: ["React", "TypeScript", "Tailwind CSS", "Framer"],
        github: "https://github.com/jobertmampusti/jobertmampusti",
        demo: "https://jobertmampusti.vercel.app",
      },
    ],
  },
  contact: {
    sectionNumber: "05.",
    sectionTitle: "Contact",
    message:
      "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.",
    email: "mampustijobert@gmail.com",
    phone: "+63 915 330 2389",
    location: "Quezon City, Philippines",
    socials: [
      { href: "https://github.com/jobertmampusti", icon: "github" as SocialIconKey },
      { href: "https://www.linkedin.com/in/jobertmampusti", icon: "linkedin" as SocialIconKey },
    ],
  },
  footerText: "© 2025 Jobert Mampusti. All rights reserved.",
};

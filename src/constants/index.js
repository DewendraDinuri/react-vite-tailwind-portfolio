import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a passionate software engineer turning ideas into scalable digital solutions. I focus on crafting intuitive user experiences and writing clean, maintainable code. With a strong foundation in object-oriented programming and Java, I build responsive front-ends using React and Tailwind CSS, and powerful back-ends with Node.js. Every project is a step toward innovation blending creativity, logic, and purpose to shape the future of web development.`;

export const ABOUT_TEXT = `I am a dedicated and ambitious software engineer with a passion for building user-friendly and efficient web applications. With a strong foundation in object-oriented programming and Java, I enjoy working across both front-end and back-end technologies. My experience includes developing responsive interfaces using React and Tailwind CSS, and building server-side logic with Node.js. I also have hands-on knowledge in machine learning, including training models and developing intelligent modules to solve real-world problems. I’m always eager to learn, improve, and take on new challenges in collaborative environments. Outside of coding, I enjoy exploring emerging technologies and sharpening my skills through personal projects and open-source contributions.`;
export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Agri Adapt - AI Powered Crop Management",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["Flutter", "React", "Node.js", "Firebase", "MongoDB"],
  },
  {
    title: "Real-Time Event Ticketing System",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["JAVA", "React", "Node.js", "NOSQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwindcss"],
  },
  {
    title: "Blogging  Platform", 
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

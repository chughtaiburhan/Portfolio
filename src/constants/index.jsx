import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "BURHAN CHUGHTAI",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using React.jsx and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://amazon-clone-iota-kohl.vercel.app",
  },
  {
    id: 2,
    name: "Chat-bot Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://chat-bot-iota-wine.vercel.app",
  },
  {
    id: 3,
    name: "Admin-panel",
    description:
      "Admin panel project is built using React and incorporates various modern technologies to provide a comprehensive solution for managing application data and user interactions. With features like user management, data visualization, and responsive design, it offers a powerful tool for administrators to efficiently oversee the functionalities of their system.",
    image: projectImage6,
    githubLink: "https://admin-panel-xi-taupe.vercel.app",
  },
  {
    id: 4,
    name: "Voting-app",
    description:
      "A voting app allows users to register, log in, and vote for parties in an election-like setting, with security features implemented via JWT tokens. The app is structured to ensure clear separation of concerns between the frontend and backend, making it easier to maintain and scale.",
    image: projectImage6,
    githubLink: "https://election-voting.vercel.app",
  },
];

export const BIO = [
  "My name is Burhan, and I have recently embarked on my journey in Computer Science. I am eager to continue my studies and deepen my understanding of this field. As a full-stack developer, I specialize in frontend development, with a strong foundation in HTML, CSS, Tailwind, JSX, Node.js, and MongoDB. I have been working on various web application projects for the past two years, focusing primarily on creating engaging user interfaces. Although I am a fresher and have not yet worked in a company, I am committed to honing my skills and gaining practical experience in the industry. Prior to this, I dedicated time to studying and exploring different aspects of web development, which has prepared me for this exciting path."
];


export const SKILLS = [
  {
    icon: <FaHtml5 className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "HTML",
    experience: "1+ years",
  },
  {
    icon: <FaCss3Alt className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "CSS",
    experience: "1+ years",
  },
  {
    icon: <FaBootstrap className="text-4xl text-purple-600 lg:text-5xl" />,
    name: "Bootstrap",
    experience: "2+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "JavaScript",
    experience: "2+ years",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "1.5+ years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "Familiar with basic concepts",
  },

];



export const EDUCATION = [
  {
    degree: "Intermediate in Computer Science",
    institution: "Government Degree Boys College[5-l New Karachi] , Karachi",
    duration: "July 2022 - August 2024",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  },

];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/burhanchughtai01/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/chughtaiburhan?tab=repositories",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];

import { AppD, Blockchain, Design, Foss, Infosec, Ml, WebD } from "../../assets";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Cp
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Placement Powerhouse",
    icon: web,
  },
  {
    title: "1st among newly established IIIT's",
    icon: mobile,
  },
  {
    title: "50 acre campus",
    icon: backend,
  },
  {
    title: "Technical Expertise",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
       "An institue slowly growing to become the hub of tech exellence along with inculcating cultural and euntrepreneurial values, on its way to become a Tier-1 institue.",
    name: "Dr. Arun Mohan Sherry",
    designation: "Director",
    company: "IIIT Lucknow",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
    "The students of IIIT Lucknow emerge as well rounded individuals,with technical skillset along with communicational prowess and healthy statures.",
    name: "Dr. Dhananjoy Dey ",
    designation: "Dean(Academic)",
    company: "IIIT Lucknow",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Keeping in mind that the first batch passed out in 2k19, the highest C.T.C being 28 Lakhs, surpasses other newly established IIITs and is exponentially increasing the bar!!",
    name: "Dr. Vishal Krishna Singh",
    designation: "Faculty In-Charge(Placements)",
    company: "IIIT Lucknow",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Competitve Programming",
    description:
    "Students may hone their coding abilities and get ready for competitive programming competitions by attending seminars and training sessions led by IIIT Lucknow's CP (Competitive Programming) branch.",
    tags: [
      {
        name: "cses",
        color: "blue-text-gradient",
      },
      {
        name: "STL",
        color: "green-text-gradient",
      },
      {
        name: "logic",
        color: "pink-text-gradient",
      },
    ],
    image: Cp,
    source_code_link: "https://github.com/",
  },
  {
    name: "Web Dev",
    description:
      "The WebD wing conducts training sessions to help students improve their skills in areas such as HTML, CSS, JavaScript, and web frameworks like React, Angular, and Vue",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: WebD,
    source_code_link: "https://github.com/",
  },
  {
    name: "ML",
    description:
      "The AI-ML wing holds training sessions to assist students in honing their abilities in data analysis, data preprocessing, machine learning algorithms, and deep learning.",
    tags: [
      {
        name: "CV",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    image: Ml,
    source_code_link: "https://github.com/",
  },
  {
    name: "FOSS",
    description:
      "The FOSS (Free and Open Source Software) wing hones student in Collaborative working and contributing to projects on Github .",
    tags: [
      {
        name: "git",
        color: "blue-text-gradient",
      },
      {
        name: "repo",
        color: "green-text-gradient",
      },
      {
        name: "fork",
        color: "pink-text-gradient",
      },
    ],
    image: Foss,
    source_code_link: "https://github.com/",
  },
  {
    name: "App Dev",
    description:
      "It teaches students iOS app development, Android app development, cross-platform app development, and app design. The workshops cover topics such as app development fundamentals, app architecture, and app testing.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: AppD,
    source_code_link: "https://github.com/",
  },
  {
    name: "Infosec",
    description:
      "It imparts skills in areas such as network security, web application security, cryptography, and ethical hacking. The workshops cover topics such as cyber threats, cyber attacks, and countermeasures.",
    tags: [
      {
        name: "CTF",
        color: "blue-text-gradient",
      },
      {
        name: "Linux",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: Infosec,
    source_code_link: "https://github.com/",
  },
  {
    name: "Design",
    description:
      "It helps students improve their skills in areas such as design principles, typography, colour theory, and design tools such as Adobe Photoshop, Illustrator, Canva and Sketch.",
    tags: [
      {
        name: "canva",
        color: "blue-text-gradient",
      },
      {
        name: "visual",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Design,
    source_code_link: "https://github.com/",
  },
  {
    name: "Blockchain",
    description:
      "The Blockchain wing provides training sessions and events to help students learn about blockchain technology and showcase their skills.",
    tags: [
      {
        name: "Etherium",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "bitcoin",
        color: "pink-text-gradient",
      },
    ],
    image: Blockchain,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-cell",
    description:
      "stinations.",
    tags: [
      {
        name: "finance",
        color: "blue-text-gradient",
      },
      {
        name: "enspire",
        color: "green-text-gradient",
      },
      {
        name: "incubation",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

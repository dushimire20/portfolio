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
    horizon,
    jobit,
    tripguide,
    threejs,
    espoir,
    Manzi,
    OlivierCeo,
    Hirwa
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      title: "IT support Engineer",
      company_name: "Horizon Group",
      icon: horizon,
      iconBg: "#383E56",
      date: "August 2022 - December 2022",
      points: [
        "Responded to and resolved technical support requests from end-users via phone, email, and in-person, ensuring prompt and efficient problem resolution.",
        "Assisted in network configuration and troubleshooting, resolving connectivity issues and ensuring smooth network operations.",
        "Maintained and updated computer systems by installing patches, updates, and antivirus software, and performed routine system checks to proactively identify and resolve potential issues.",
        "Actively stayed up to date with the latest technology trends and industry best practices, identifying opportunities for process improvement and implementing solutions to enhance IT support services.",
      ],
    },
   
    {
      title: "Full stack Developer",
      company_name: "CloudSkale",
      icon: horizon,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Actively stayed up to date with the latest technology trends and industry best practices, identifying opportunities for process improvement and implementing solutions to enhance IT support services.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Oscar proved me wrong.",
      name: "Olivier Nsabimana",
      designation: "CEO",
      company: "CloudSkale",
      image: OlivierCeo,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Oscar does.",
      name: "Manzi Gandhi",
      designation: "UI/UX Engineer ",
      company: "CloudSkale",
      image: Manzi,
    },
    {
      testimonial:
        "After Oscar optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Hirwa Olivier",
      designation: "CEO",
      company: "Espoir Coffee",
      image: Hirwa,
    },
  ];
  
  const projects = [
    {
      name: "Espoir Coffee",
      description:
        " A web based for a Company which is a source of coffee that is the highest quality from the hills of Rwanda.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: espoir,
      source_code_link: "http://espoir.coffee.s3-website-us-east-1.amazonaws.com",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
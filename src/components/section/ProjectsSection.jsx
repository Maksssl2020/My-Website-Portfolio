import React from "react";
import SectionBanner from "../banner/SectionBanner.jsx";
import Section from "./Section.jsx";
import ProjectsList from "../list/ProjectsList.jsx";

const projectsInfoData = [
  {
    title: "Clinic Desktop Application",
    image: "assets/clinic-project.png",
    description:
      "Still in progress. It's an application to manage medical clinic application. It allows user to manage doctors, patients and different pieces of data related to it. It's built with C#, WPF, Entity Framework and Sql Server. It uses a MVVM pattern.",
    codeLink:
      "https://github.com/Maksssl2020/MVVMPrivateClinicProjectDesktopApp.git",
    tags: ["C#", "WPF", "MVVM", "MS SQL Server", "Entity Framework"],
  },
  {
    title: "Taskly Web Application",
    image: "assets/taskly.png",
    description:
      "Still in progress. It's a tasks management application. To use it, user have to create an account. For that project I use C#, .NET, Entity Framework, Angular, JWT, SCSS and SQLite.",
    codeLink: "https://github.com/Maksssl2020/ManagingTasksWebApp.git",
    websiteLink: "https://taskly-app.azurewebsites.net",
    tags: [
      "C#",
      "Entity Framework",
      "Angular",
      "TypeScript",
      "SCSS",
      "HTML",
      "JWT",
      ".NET",
      "MS SQL Server",
    ],
  },
  {
    title: "Fullstack DST Web Application",
    image: "assets/TEST.png",
    description:
      "Still in progress. It'll be a small community service for my friend's foundation. To create it I use Java, Spring Boot, React, Tailwind CSS and PostgreSQL.",
    codeLink:
      "https://github.com/Maksssl2020/Fullstack-DST-Web-App-Project.git",
    tags: [
      "JAVA",
      "Spring Boot",
      "HTML & CSS",
      "Tailwind CSS",
      "JWT",
      "PostgreSQL",
      "React",
      "Framer Motion",
    ],
  },
  {
    title: "Epic Games Inspired Website",
    image: "assets/Epic-Games-Inspired-Website.PNG",
    description:
      "Epic Games inspired website with static data. Built with React, JavaScript and Tailwind CSS.",
    codeLink:
      "https://github.com/Maksssl2020/Website-Project-Inspired-By-Epic-Games.git",
    websiteLink: "https://my-epic-games.netlify.app",
    tags: ["React", "JavaScript", "Tailwind CSS", "HTML"],
  },
  {
    title: "Hangman Game With GUI",
    image: "assets/Hangman-Game-With-GUI.png",
    description:
      "Play hangman with your friend and chat with them. Created with Java, Java Swing and Java Server Sockets.",
    codeLink: "https://github.com/Maksssl2020/HangmanGameWithGui.git",
    tags: ["Java", "Java Swing", "Java Server Sockets"],
  },
];

const ProjectsSection = () => {
  const [isSectionVisible, setIsSectionVisible] = React.useState(false);

  return (
    <Section id={"projects"} setVisibility={setIsSectionVisible}>
      <SectionBanner sectionNumber={"3"} title={"Projects"} />
      <ProjectsList isVisible={isSectionVisible} listData={projectsInfoData} />
    </Section>
  );
};

export default ProjectsSection;

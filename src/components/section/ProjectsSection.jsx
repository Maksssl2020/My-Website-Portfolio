import React from "react";
import SectionBanner from "../banner/SectionBanner.jsx";
import Section from "./Section.jsx";
import ProjectsList from "../list/ProjectsList.jsx";

const projectsInfoData = [
  {
    title: "Fullstack DST Web Application",
    image: "assets/TEST.png",
    description:
      "Still in progress. It'll be a small community service for my friend's foundation. To create it I use Java, Spring Boot, React, Tailwind CSS and PostgreSQL.",
    codeLink:
      "https://github.com/Maksssl2020/Fullstack-DST-Web-App-Project.git",
  },
  {
    title: "Epic Games Inspired Website",
    image: "assets/Epic-Games-Inspired-Website.PNG",
    description:
      "Epic Games inspired website with static data. Built with React, JavaScript and Tailwind CSS.",
    codeLink:
      "https://github.com/Maksssl2020/Website-Project-Inspired-By-Epic-Games.git",
    websiteLink: "https://my-epic-games.netlify.app",
  },
  {
    title: "Hangman Game With GUI",
    image: "assets/Hangman-Game-With-GUI.png",
    description:
      "Play hangman with your friend and chat with them. Created with Java, Java Swing and Java Server Sockets.",
    codeLink: "https://github.com/Maksssl2020/HangmanGameWithGui.git",
  },
];

const ProjectsSection = () => {
  const [isSectionVisible, setIsSectionVisible] = React.useState(false);

  return (
    <Section id={"projects"} setVisibility={setIsSectionVisible}>
      <SectionBanner title={"Projects"} />
      <ProjectsList isVisible={isSectionVisible} listData={projectsInfoData} />
    </Section>
  );
};

export default ProjectsSection;

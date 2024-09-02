import React from "react";
import SectionBanner from "../banner/SectionBanner.jsx";
import ProjectCard from "../card/ProjectCard.jsx";

const projectsInfoData = [
  {
    title: "Epic Games Inspired Website",
    description:
      "Epic Games inspired website with static data. Built with React, JavaScript and Tailwind CSS.",
    codeLink:
      "https://github.com/Maksssl2020/Website-Project-Inspired-By-Epic-Games.git",
    websiteLink: "https://epic-games-project.netlify.app/",
  },
];

const ProjectsSection = () => {
  return (
    <div
      className={
        "w-full h-[100vh] gap-8 flex flex-col items-center justify-center"
      }
    >
      <SectionBanner title={"Projects"} />
      {projectsInfoData.map((data, index) => (
        <ProjectCard
          key={index}
          title={data.title}
          description={data.description}
          codeLink={data.codeLink}
          websiteLink={data.websiteLink}
        />
      ))}
    </div>
  );
};

export default ProjectsSection;

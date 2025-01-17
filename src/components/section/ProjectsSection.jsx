import React from "react";
import SectionBanner from "../banner/SectionBanner.jsx";
import Section from "./Section.jsx";
import ProjectsList from "../list/ProjectsList.jsx";
import { projectsInfoData } from "../../data/projectsInfoData.js";

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

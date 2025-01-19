import React from "react";
import SectionBanner from "../banner/SectionBanner.jsx";
import Section from "./Section.jsx";
import ProjectsList from "../list/ProjectsList.jsx";
import { projectsInfoData } from "../../data/projectsInfoData.js";
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const { t } = useTranslation();
  const [isSectionVisible, setIsSectionVisible] = React.useState(false);

  return (
    <Section id={"projects"} setVisibility={setIsSectionVisible}>
      <SectionBanner sectionNumber={"3"} title={t("projectsTitle")} />
      <ProjectsList isVisible={isSectionVisible} listData={projectsInfoData} />
    </Section>
  );
};

export default ProjectsSection;

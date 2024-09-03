import React from "react";
import SectionBanner from "../banner/SectionBanner.jsx";
import SkillCard from "../card/SkillCard.jsx";
import Section from "./Section.jsx";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import SkillsList from "../list/SkillsList.jsx";

const firstColumnData = [
  {
    iconLink: "src/assets/java-icon.SVG",
    skillName: "Java",
  },
  {
    iconLink: "src/assets/spring-boot-icon.SVG",
    skillName: "Spring Boot",
  },
  {
    iconLink: "src/assets/javascript-icon.SVG",
    skillName: "JavaScript",
  },
  {
    iconLink: "src/assets/csharp-icon.SVG",
    skillName: "C#",
  },
  {
    iconLink: "src/assets/postgresql-icon.SVG",
    skillName: "PostgreSQL",
  },
];

const secondColumnData = [
  {
    iconLink: "src/assets/react-icon.SVG",
    skillName: "React",
  },
  {
    iconLink: "src/assets/html-icon.SVG",
    skillName: "HTML",
  },
  {
    iconLink: "src/assets/css-icon.SVG",
    skillName: "CSS",
  },
  {
    iconLink: "src/assets/tailwind-icon.SVG",
    skillName: "Tailwind CSS",
  },
  {
    iconLink: "src/assets/github-icon.SVG",
    skillName: "Github",
  },
];

const SkillsSection = () => {
  const [isSectionVisible, setIsSectionVisible] = React.useState(false);

  return (
    <Section id={"skills"} setVisibility={setIsSectionVisible}>
      <SectionBanner title={"skills"} />
      <div className={"grid grid-cols-2 w-[1000px] justify-between"}>
        <SkillsList
          listData={firstColumnData}
          hiddenSide={"left"}
          isVisible={isSectionVisible}
        />
        <SkillsList
          listData={secondColumnData}
          hiddenSide={"right"}
          isVisible={isSectionVisible}
        />
      </div>
    </Section>
  );
};

export default SkillsSection;

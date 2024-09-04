import React from "react";
import SectionBanner from "../banner/SectionBanner.jsx";
import Section from "./Section.jsx";
import SkillsList from "../list/SkillsList.jsx";

const firstColumnData = [
  {
    iconLink: "assets/java-icon.SVG",
    skillName: "Java",
  },
  {
    iconLink: "assets/spring-boot-icon.SVG",
    skillName: "Spring Boot",
  },
  {
    iconLink: "assets/javascript-icon.SVG",
    skillName: "JavaScript",
  },
  {
    iconLink: "assets/csharp-icon.SVG",
    skillName: "C#",
  },
  {
    iconLink: "assets/postgresql-icon.SVG",
    skillName: "PostgreSQL",
  },
];

const secondColumnData = [
  {
    iconLink: "assets/react-icon.SVG",
    skillName: "React",
  },
  {
    iconLink: "assets/html-icon.SVG",
    skillName: "HTML",
  },
  {
    iconLink: "assets/css-icon.SVG",
    skillName: "CSS",
  },
  {
    iconLink: "assets/tailwind-icon.SVG",
    skillName: "Tailwind CSS",
  },
  {
    iconLink: "assets/github-icon.SVG",
    skillName: "Github",
  },
];

const SkillsSection = () => {
  const [isSectionVisible, setIsSectionVisible] = React.useState(false);

  return (
    <Section id={"skills"} setVisibility={setIsSectionVisible}>
      <SectionBanner title={"skills"} />
      <div
        className={
          "grid grid-cols-2 max-lg:w-[80%] lg:w-[950px] xl:w-[1000px] justify-between"
        }
      >
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

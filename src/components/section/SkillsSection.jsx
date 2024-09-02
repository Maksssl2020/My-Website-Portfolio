import React from "react";
import SectionBanner from "../banner/SectionBanner.jsx";
import SkillCard from "../card/SkillCard.jsx";

const firstColumnData = [
  {
    iconLink: "src/assets/java-icon.svg",
    skillName: "Java",
  },
  {
    iconLink: "src/assets/spring-boot-icon.svg",
    skillName: "Spring Boot",
  },
  {
    iconLink: "src/assets/javascript-icon.svg",
    skillName: "JavaScript",
  },
  {
    iconLink: "src/assets/csharp-icon.svg",
    skillName: "C#",
  },
  {
    iconLink: "src/assets/postgresql-icon.svg",
    skillName: "PostgreSQL",
  },
];

const secondColumnData = [
  {
    iconLink: "src/assets/react-icon.svg",
    skillName: "React",
  },
  {
    iconLink: "src/assets/html-icon.svg",
    skillName: "HTML",
  },
  {
    iconLink: "src/assets/css-icon.svg",
    skillName: "CSS",
  },
  {
    iconLink: "src/assets/tailwind-icon.svg",
    skillName: "Tailwind CSS",
  },
  {
    iconLink: "src/assets/github-icon.svg",
    skillName: "Github",
  },
];

const SkillsSection = () => {
  return (
    <div
      className={
        "w-full h-[100vh] py-16 flex flex-col gap-16 items-center justify-center"
      }
    >
      <SectionBanner title={"skills"} />
      <div className={"grid grid-cols-2 w-[1000px] justify-between"}>
        <div className={"flex flex-col gap-6"}>
          {firstColumnData.map((data, index) => (
            <SkillCard
              key={index}
              imageLink={data.iconLink}
              title={data.skillName}
              backwardRotate={index % 2 === 0}
            />
          ))}
        </div>
        <div className={"flex flex-col gap-6 ml-auto"}>
          {secondColumnData.map((data, index) => (
            <SkillCard
              key={index}
              imageLink={data.iconLink}
              title={data.skillName}
              backwardRotate={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;

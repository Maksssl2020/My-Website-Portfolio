import React from "react";
import SectionBanner from "../banner/SectionBanner.jsx";
import Section from "./Section.jsx";
import SkillCard from "../card/SkillCard.jsx";
import { AnimatePresence, motion } from "framer-motion";
import SkillsList from "../list/SkillsList.jsx";
import { useTranslation } from "react-i18next";

const skilssData = [
  {
    iconLink: "assets/java-icon.SVG",
    skillName: "Java",
    skillDocs: "https://www.oracle.com/java/",
  },
  {
    iconLink: "assets/spring-boot-icon.SVG",
    skillName: "Spring Boot",
    skillDocs: "https://spring.io/projects/spring-boot",
  },
  {
    iconLink: "assets/javascript-icon.SVG",
    skillName: "JavaScript",
    skillDocs: "https://devdocs.io/javascript/",
  },
  {
    iconLink: "assets/csharp-icon.SVG",
    skillName: "C#",
    skillDocs: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    iconLink: "assets/postgresql-icon.SVG",
    skillName: "PostgreSQL",
    skillDocs: "https://www.postgresql.org/",
  },
  {
    iconLink: "assets/angular-icon.SVG",
    skillName: "Angular",
    skillDocs: "https://angular.dev/",
  },
  {
    iconLink: "assets/dotnet-icon.SVG",
    skillName: ".NET",
    skillDocs: "https://dotnet.microsoft.com/en-us/",
  },
  {
    iconLink: "assets/react-icon.SVG",
    skillName: "React",
    skillDocs: "https://react.dev/",
  },
  {
    iconLink: "assets/html-icon.SVG",
    skillName: "HTML",
    skillDocs: "https://devdocs.io/html/",
  },
  {
    iconLink: "assets/css-icon.SVG",
    skillName: "CSS",
    skillDocs: "https://devdocs.io/css/",
  },
  {
    iconLink: "assets/tailwind-icon.SVG",
    skillName: "Tailwind CSS",
    skillDocs: "https://tailwindcss.com/",
  },
  {
    iconLink: "assets/scss-icon.SVG",
    skillName: "SCSS",
    skillDocs: "https://sass-lang.com/",
  },
  {
    iconLink: "assets/typescript-icon.SVG",
    skillName: "TypeScript",
    skillDocs: "https://www.typescriptlang.org/",
  },
];

const SkillsSection = () => {
  const { t } = useTranslation();
  const [isSectionVisible, setIsSectionVisible] = React.useState(false);

  return (
    <Section id={"skills"} setVisibility={setIsSectionVisible}>
      <SectionBanner sectionNumber={"2"} title={t("skillsTitle")} />
      <SkillsList listData={skilssData} isVisible={isSectionVisible} />
    </Section>
  );
};

export default SkillsSection;

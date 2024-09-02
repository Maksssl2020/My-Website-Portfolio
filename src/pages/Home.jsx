import React from "react";
import GreetingsSection from "../components/section/GreetingsSection.jsx";
import AboutSection from "../components/section/AboutSection.jsx";
import SkillsSection from "../components/section/SkillsSection.jsx";
import ProjectsSection from "../components/section/ProjectsSection.jsx";

const Home = () => {
  return (
    <div className={"w-full h-full"}>
      <GreetingsSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
};

export default Home;

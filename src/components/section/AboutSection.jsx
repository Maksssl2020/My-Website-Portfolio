import React from "react";
import SectionBanner from "../banner/SectionBanner.jsx";
import Section from "./Section.jsx";
import { motion } from "framer-motion";

const AboutSection = () => {
  const [isSectionVisible, setIsSectionVisible] = React.useState(false);

  return (
    <Section id={"about"} setVisibility={setIsSectionVisible}>
      <SectionBanner title={"about"} />
      <div
        className={
          "flex max-xl:flex-col max-xl:gap-20 xl:justify-between rounded-l-full items-center lg:w-[1000px] xl:w-[1250px]"
        }
      >
        <motion.div
          initial={{ x: "-55%", opacity: 0 }}
          animate={isSectionVisible && { x: "0%", opacity: 1 }}
          transition={{ duration: 1.0 }}
          className={
            "max-2xs:size-[250px] max-sm:size-[325px] sm:size-[400px] md:size-[450px] lg:size-[500px] rounded-full border-4 border-custom-violet-100"
          }
        >
          <img
            className={"w-full h-full rounded-full inset-0 object-cover"}
            src="assets/My-Face.JPG"
            alt={"My-Face_picture"}
          />
        </motion.div>
        <motion.div
          initial={{ x: "55%", opacity: 0 }}
          animate={isSectionVisible && { x: "0%", opacity: 1 }}
          transition={{ duration: 1.0 }}
          className={
            "font-medium max-xl:w-[80%] xl:w-[500px] max-2xs:text-sm 2xs:text-[16px] xs:text-lg sm:text-xl lg:text-2xl relative tracking-normal text-white flex flex-col gap-4"
          }
        >
          <p className={"violet-text-gradient"}>
            {
              "I'm an IT student with a passion for learning new things, especially when it comes to technology. My favorite programming language is Java, but I'm always eager to explore and master new tools and languages. In my free time, I enjoy reading books, particularly those that delve into science, as well as playing computer games, watching movies, and listening to music."
            }
          </p>
          <p className={"violet-text-gradient"}>
            {
              "I'm highly detail-oriented and strive for excellence in everything I do. My goal is to become a full-stack developer, combining my love for both front-end and back-end development to create seamless, efficient, and user-friendly applications."
            }
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutSection;

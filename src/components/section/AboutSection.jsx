import React, { useState } from "react";
import SectionBanner from "../banner/SectionBanner.jsx";
import Section from "./Section.jsx";
import { motion } from "framer-motion";

const AboutSection = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isImageContainerHovered, setIsImageContainerHovered] = useState(false);

  return (
    <Section id={"about"} setVisibility={setIsSectionVisible}>
      <SectionBanner sectionNumber={"1"} title={"about"} />
      <div
        className={
          "flex w-[950px] items-center rounded-l-full max-xl:flex-col max-xl:gap-20 xl:justify-between"
        }
      >
        <motion.div
          initial={{ x: "-55%", opacity: 0 }}
          animate={isSectionVisible && { x: "0%", opacity: 1 }}
          transition={{ duration: 1.0 }}
          className={
            "relative flex flex-col gap-4 font-normal tracking-normal max-xl:w-[80%] max-2xs:text-sm 2xs:text-[16px] xs:text-lg sm:text-xl lg:text-2xl xl:w-[500px]"
          }
        >
          <p className={"text-custom-gray-200"}>
            I'm an <span className={"text-custom-blue-100"}>IT student</span>{" "}
            with a passion for learning new things, especially when it comes to
            technology. My favorite programming language is{" "}
            <span className={"text-custom-blue-100"}>Java</span>, but I'm always
            <span className={"ml-1 text-custom-blue-100"}>
              eager to explore and master new tools and languages
            </span>
            . In my free time, I enjoy reading books, particularly those that
            delve into science, as well as playing computer games, watching
            movies, and listening to music.
          </p>
          <p className={"text-custom-gray-200"}>
            I'm{" "}
            <span className={"text-custom-blue-100"}>
              highly detail-oriented and strive for excellence
            </span>{" "}
            in everything I do. My goal is to become a{" "}
            <span className={"text-custom-blue-100"}>full-stack developer</span>
            , combining my love for both front-end and back-end development to
            create seamless, efficient, and user-friendly applications.
          </p>
        </motion.div>
        <motion.div
          onMouseEnter={() => setIsImageContainerHovered(true)}
          onMouseLeave={() => setIsImageContainerHovered(false)}
          initial={{ x: "55%", opacity: 0 }}
          animate={isSectionVisible && { x: "0%", opacity: 1 }}
          transition={{ duration: 1.0 }}
          className={
            "relative max-sm:size-[325px] max-2xs:size-[250px] sm:size-[400px] md:size-[300px] lg:size-[350px]"
          }
        >
          <motion.div
            animate={
              isImageContainerHovered
                ? { x: "7%", y: "7%" }
                : { x: "5%", y: "5%" }
            }
            transition={{ duration: 0.2 }}
            className={
              "absolute -z-10 size-full rounded-lg border-4 border-custom-blue-100 bg-black"
            }
          ></motion.div>
          <motion.div
            animate={
              isImageContainerHovered
                ? { x: "-2%", y: "-2%" }
                : { x: "0%", y: "0%" }
            }
            transition={{ duration: 0.2 }}
            className={
              "relative size-full rounded-lg border-4 border-custom-blue-100"
            }
          >
            <motion.div
              animate={
                isImageContainerHovered ? { opacity: 0 } : { opacity: 0.4 }
              }
              className={"absolute size-full bg-custom-blue-100"}
            ></motion.div>
            <img
              className={"inset-0 h-full w-full rounded-md object-cover"}
              src="assets/My-Face.JPG"
              alt={"My-Face_picture"}
            />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutSection;

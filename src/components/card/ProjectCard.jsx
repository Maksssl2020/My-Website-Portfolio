import React from "react";
import { motion } from "framer-motion";
import AnimatedProjectButton from "../button/AnimatedProjectButton.jsx";

const ProjectCard = ({
  title,
  image,
  description,
  codeLink,
  websiteLink,
  isFlipped,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={
        "aspect-video w-full md:mx-6 xl:w-[1250px] xl:h-[650px] relative flex md:border-4 md:rounded-2xl"
      }
    >
      <div
        className={`w-[70%] max-xs:px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 h-full flex justify-center items-center violet-background-gradient ${isFlipped ? "ml-auto md:rounded-r-xl" : "md:rounded-l-xl"}`}
      >
        <img
          className={"h-[85%] w-full object-cover md:border-4 md:rounded-2xl"}
          src={image}
          alt={"Epic-Games-Inspired-Website"}
        />
      </div>
      <div
        className={`text-white mt-[5%] flex flex-col font-medium 3xs:gap-1 sm:gap-3 md:gap-4 lg:gap-5 inset-0 w-[30%] absolute ${isFlipped ? "mr-auto ml-[3%]" : "ml-auto mr-[3%]"}`}
      >
        <h1
          className={
            "max-3xs:text-[8px] 3xs:text-[10px] 2xs:text-sm xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold select-none"
          }
        >
          {title}
        </h1>
        <p
          className={
            "max-3xs:text-[5px] 3xs:text-[6px] xs:text-[10px] sm:text-sm md:text-lg xl:text-xl select-none"
          }
        >
          {description}
        </p>
        <AnimatedProjectButton title={"See Code"} link={codeLink} />
        {websiteLink && (
          <AnimatedProjectButton title={"See Website"} link={websiteLink} />
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;

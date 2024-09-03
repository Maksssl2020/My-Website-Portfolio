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
      initial={{ x: 125, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      whileHover={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={"w-[75%] h-[650px] relative flex border-4 rounded-2xl"}
    >
      <div
        className={`w-[70%] h-full rounded-l-xl flex justify-center items-center violet-background-gradient ${isFlipped && "ml-auto"}`}
      >
        <img
          className={
            "w-[85%] h-[85%] inset-0 object-cover border-4 rounded-2xl"
          }
          src={image}
          alt={"Epic-Games-Inspired-Website"}
        />
      </div>
      <div
        className={`text-white mt-[5%] flex flex-col font-medium gap-5 inset-0 w-[30%] absolute ${isFlipped ? "mr-auto ml-[3%]" : "ml-auto mr-[3%]"}`}
      >
        <h1 className={"text-4xl font-semibold"}>{title}</h1>
        <p className={"text-xl"}>{description}</p>
        <AnimatedProjectButton title={"See Code"} link={codeLink} />
        {websiteLink && (
          <AnimatedProjectButton title={"See Website"} link={websiteLink} />
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;

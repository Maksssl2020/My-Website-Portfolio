import React from "react";
import { motion } from "framer-motion";
import AnimatedButton from "../button/AnimatedButton.jsx";

const ProjectCard = ({ title, description, codeLink, websiteLink }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={"w-[75%] h-[650px] relative flex border-4 rounded-2xl"}
    >
      <div
        className={
          "w-[70%] h-full rounded-l-xl flex justify-center items-center violet-background-gradient"
        }
      >
        <img
          className={
            "w-[85%] h-[85%] inset-0 object-cover border-4 rounded-2xl"
          }
          src="src/assets/Epic-Games-Inspired-Website.PNG"
          alt={"Epic-Games-Inspired-Website"}
        />
      </div>
      <div
        className={
          "text-white mt-[5%] flex flex-col font-medium gap-5 inset-0 ml-auto mr-[3%] w-[30%] absolute"
        }
      >
        <h1 className={"text-4xl font-semibold"}>{title}</h1>
        <p className={"text-xl"}>{description}</p>
        <AnimatedButton title={"See Code"} link={codeLink} />
        {websiteLink && (
          <AnimatedButton title={"See Website"} link={websiteLink} />
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;

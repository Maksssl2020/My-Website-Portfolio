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
  tags,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={
        "relative flex h-[250px] w-full cursor-pointer items-center justify-between rounded-lg px-4 md:border-2 xl:w-[1000px]"
      }
    >
      <div
        className={`flex h-full w-auto flex-col gap-4 py-2 ${isFlipped && "ml-auto"}`}
      >
        <h1 className={"h-[35px] text-3xl font-medium text-white"}>{title}</h1>
        <ul className={"flex h-auto w-[500px] flex-wrap gap-2 text-white"}>
          {tags.map((data, index) => (
            <li
              key={index}
              className={
                "pink-violet-blue-background-gradient rounded-full px-4 py-1 font-bold"
              }
            >
              {data}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`absolute flex aspect-video h-full items-center justify-center ${isFlipped ? "left-0" : "right-0"}`}
      >
        <img
          className={`h-full w-full rounded-r-md object-cover ${isFlipped ? "rounded-l-lg" : "rounded-r-lg"}`}
          src={image}
          alt={title}
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;

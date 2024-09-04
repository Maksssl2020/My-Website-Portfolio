import React from "react";
import List from "./List.jsx";
import { motion } from "framer-motion";
import ProjectCard from "../card/ProjectCard.jsx";

const ProjectsList = ({ listData, isVisible }) => {
  return (
    <List
      className={`w-full flex flex-col gap-6 overflow-x-hidden`}
      isVisible={isVisible}
    >
      {listData.map((data, index) => (
        <motion.li
          variants={{
            visible: isVisible && { x: 0, opacity: 1 },
            hidden: {
              x: index % 2 !== 0 ? -125 : 125,
              opacity: 0,
            },
          }}
          transition={{ type: "just", duration: 0.5 }}
          className={"flex justify-center items-center"}
          key={index}
        >
          <ProjectCard
            key={index}
            title={data.title}
            image={data.image}
            description={data.description}
            codeLink={data.codeLink}
            websiteLink={data.websiteLink}
            isFlipped={index % 2 !== 0}
          />
        </motion.li>
      ))}
    </List>
  );
};

ProjectsList.propTypes = {};

export default ProjectsList;

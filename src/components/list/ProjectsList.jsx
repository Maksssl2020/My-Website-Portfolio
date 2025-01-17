import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "../card/ProjectCard.jsx";

const ProjectsList = ({ listData, isVisible }) => {
  return (
    <AnimatePresence mode={"wait"}>
      <motion.div
        initial={"hidden"}
        animate={isVisible && "visible"}
        exit={"hidden"}
        transition={{ staggerChildren: 0.2 }}
        className={`flex h-auto w-[1000px] flex-col gap-6`}
      >
        {listData.map((data, index) => (
          <motion.div
            variants={{
              visible: isVisible && { x: 0, opacity: 1 },
              hidden: {
                x: index % 2 !== 0 ? -125 : 125,
                opacity: 0,
              },
            }}
            transition={{ duration: 0.8, type: "just" }}
            className={`flex h-full items-center justify-center`}
            key={index}
          >
            <ProjectCard
              key={index}
              title={data.title}
              image={data.images[0]}
              description={data.description}
              pageName={data.pageName}
              isFlipped={index % 2 === 0}
            />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectsList;

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "../card/ProjectCard.jsx";
import { useTranslation } from "react-i18next";

const ProjectsList = ({ listData, isVisible }) => {
  const { i18n } = useTranslation();

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
              title={i18n.language === "en" ? data.title.en : data.title.pl}
              image={data.images[0]}
              description={
                i18n.language === "en"
                  ? data.description.en
                  : data.description.pl
              }
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

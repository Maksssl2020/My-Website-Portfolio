import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import SkillCard from "../card/SkillCard.jsx";

const SkillsList = ({ listData, isVisible }) => {
  return (
    <AnimatePresence mode={"wait"}>
      <motion.div
        initial={"hidden"}
        animate={isVisible && "visible"}
        exit={"hidden"}
        transition={{ staggerChildren: 0.2 }}
        className={
          "grid grid-cols-3 justify-between gap-6 max-lg:w-[80%] lg:w-[950px] xl:w-[1000px]"
        }
      >
        {listData.map((data, index) => (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.8 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.7, type: "just" }}
            key={index}
          >
            <SkillCard
              key={index}
              title={data.skillName}
              imageLink={data.iconLink}
              skillDocs={data.skillDocs}
            />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default SkillsList;

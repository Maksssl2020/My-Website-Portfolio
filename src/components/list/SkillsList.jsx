import React from "react";
import { motion } from "framer-motion";
import SkillCard from "../card/SkillCard.jsx";
import List from "./List.jsx";

const SkillsList = ({ listData, hiddenSide, isVisible }) => {
  return (
    <List
      className={`flex flex-col gap-6 ${hiddenSide === "right" && "ml-auto"}`}
      isVisible={isVisible}
    >
      {listData.map((data, index) => (
        <motion.li
          variants={{
            visible: isVisible && { x: 0, opacity: 1 },
            hidden: {
              x: hiddenSide === "left" ? -125 : 125,
              opacity: 0,
            },
          }}
          transition={{ type: "just", duration: 0.5 }}
          key={index}
        >
          <SkillCard
            key={index}
            imageLink={data.iconLink}
            title={data.skillName}
            backwardRotate={index % 2 === 0}
          />
        </motion.li>
      ))}
    </List>
  );
};

export default SkillsList;

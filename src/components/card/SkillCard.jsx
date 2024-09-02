import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ imageLink, title, backwardRotate }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.15,
        rotate: backwardRotate ? 3 : -3,
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={
        "border-custom-violet-100 group overflow-hidden relative w-[350px] h-[100px] border-2 flex justify-center items-center rounded-full"
      }
    >
      <motion.div
        className={
          "border-r-2 absolute bg-custom-gray-100 inset-0 -z-10 self-center border-custom-violet-100 size-[100px] flex justify-center items-center rounded-full"
        }
      >
        <img
          className={"size-[60px] inset-0 object-cover self-center"}
          src={imageLink}
          alt={`${title}-icon`}
        />
      </motion.div>
      <motion.p
        whileHover={{
          scale: 1.15,
        }}
        className={"text-white text-2xl font-bold ml-[15%]"}
      >
        {title}
      </motion.p>
    </motion.div>
  );
};

export default SkillCard;

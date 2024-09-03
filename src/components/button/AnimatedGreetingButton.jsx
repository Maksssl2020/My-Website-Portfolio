import React from "react";
import { motion } from "framer-motion";
import ArrowDownIcon from "../../icons/ArrowDownIcon.jsx";

const AnimatedGreetingButton = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.a
      whileHover={{ scale: 1.1, cursor: "pointer" }}
      href="#about"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={
        "w-[350px] h-[75px] flex rounded-xl text-custom-violet-100 justify-center items-center mt-4 self-center gap-2 border-2 border-custom-violet-100"
      }
    >
      <p className={"text-3xl "}>Find out more</p>
      <motion.p
        className={"size-6"}
        initial={{ y: 0 }}
        animate={isHovered ? { y: [-5, 0, -5] } : { y: 0 }}
        transition={
          isHovered && {
            repeat: Infinity,
            duration: 0.6,
          }
        }
      >
        <ArrowDownIcon className={"size-6 stroke-2"} />
      </motion.p>
    </motion.a>
  );
};

export default AnimatedGreetingButton;

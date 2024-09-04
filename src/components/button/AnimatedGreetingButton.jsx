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
        "max-2xs:w-[185px] max-2xs:h-[45px] 2xs:w-[215px] 2xs:h-[50px] xs:w-[275px] xs:h-[60px] sm:w-[300px] sm:h-[65px] md:w-[350px] md:h-[75px] flex rounded-xl text-custom-violet-100 justify-center items-center mt-4 self-center gap-2 border-2 border-custom-violet-100"
      }
    >
      <p className={"2xs:text-lg xs:text-xl sm:text-2xl md:text-3xl "}>
        Find out more
      </p>
      <motion.p
        className={"max-xs:size-4 xs:size-5 sm:size-6 size-6"}
        initial={{ y: 0 }}
        animate={isHovered ? { y: [-5, 0, -5] } : { y: 0 }}
        transition={
          isHovered && {
            repeat: Infinity,
            duration: 0.6,
          }
        }
      >
        <ArrowDownIcon
          className={"max-xs:size-4 xs:size-5 sm:size-6 stroke-2"}
        />
      </motion.p>
    </motion.a>
  );
};

export default AnimatedGreetingButton;

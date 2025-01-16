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
        "mt-4 flex items-center justify-center gap-2 self-center rounded-xl border-2 border-custom-blue-100 text-custom-blue-100 max-2xs:h-[45px] max-2xs:w-[185px] 2xs:h-[50px] 2xs:w-[215px] xs:h-[60px] xs:w-[275px] sm:h-[65px] sm:w-[300px] md:h-[75px] md:w-[350px]"
      }
    >
      <p className={"2xs:text-lg xs:text-xl sm:text-2xl md:text-3xl"}>
        Find out more
      </p>
      <motion.p
        className={"size-6 max-xs:size-4 xs:size-5 sm:size-6"}
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
          className={"stroke-2 max-xs:size-4 xs:size-5 sm:size-6"}
        />
      </motion.p>
    </motion.a>
  );
};

export default AnimatedGreetingButton;

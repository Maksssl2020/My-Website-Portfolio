import React from "react";
import { motion } from "framer-motion";

const AnimatedProjectButton = ({ title, link }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleButtonClick = () => {
    window.open(link, "_blank", "noopener, noreferrer");
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleButtonClick}
      className={
        "relative mr-auto overflow-hidden max-sm:px-1 max-sm:py-2 max-3xs:text-[6px] 3xs:text-[6px] xs:text-[10px] sm:px-2 sm:py-4 sm:text-sm md:text-lg lg:text-2xl"
      }
    >
      <p className={"z-20"}>{title}</p>
      <motion.div
        initial={{ height: "1%", bottom: 0, left: 0, zIndex: 1 }}
        animate={
          isHovered
            ? { height: "100%", bottom: 0, borderRadius: "12px", zIndex: -1 }
            : { height: "4%", bottom: 0, left: 0 }
        }
        className={"absolute bottom-0 w-full self-center bg-custom-blue-100"}
      />
    </motion.button>
  );
};

export default AnimatedProjectButton;

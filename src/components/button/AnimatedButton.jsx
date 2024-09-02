import React from "react";
import { motion } from "framer-motion";

const AnimatedButton = ({ title, link }) => {
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
      className={"mr-auto z-20 relative overflow-hidden text-2xl py-4 px-2"}
    >
      <p>{title}</p>
      <motion.div
        initial={{ height: "1%", bottom: 0, left: 0 }}
        animate={
          isHovered
            ? { height: "100%", bottom: 0, borderRadius: "16px" }
            : { height: "4%", bottom: 0, left: 0 }
        }
        className={
          "absolute bottom-0 self-center w-full bg-custom-violet-100 -z-30"
        }
      />
    </motion.button>
  );
};

export default AnimatedButton;

import React, { useState } from "react";
import ArrowLeftIcon from "../../icons/ArrowLeftIcon.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AnimatedGoBackButton = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [showText, setShowText] = useState(false);

  if (isHovered) {
    setTimeout(() => {
      setShowText(true);
    }, 300);
  } else if (!isHovered && showText) {
    setShowText(false);
  }

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={
        "fixed top-[50%] ml-4 mr-auto flex h-[58px] w-[148px] cursor-pointer items-center gap-4 rounded-full"
      }
      onClick={() => {
        navigate("/My-Website-Portfolio/");
        setTimeout(() => {
          const projectsSection = document.getElementById("projects");
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 500);
      }}
    >
      <motion.div
        animate={isHovered ? { minWidth: "128px" } : { minWidth: "58px" }}
        transition={{ duration: 0.4 }}
        className="flex h-full items-center gap-4 rounded-full bg-custom-gray-100"
      >
        <motion.div animate={isHovered ? { x: "10%" } : { x: "40%" }}>
          <ArrowLeftIcon className={"size-8"} isHovered={isHovered} />
        </motion.div>
        <AnimatePresence mode={"wait"}>
          {showText && (
            <motion.p
              initial={{ opacity: 0, x: "50%" }}
              animate={{ opacity: 1, x: "15%" }}
              exit={{ opacity: 0, x: "50%" }}
              transition={{ duration: 0.1 }}
              className={"text-lg uppercase text-white"}
            >
              Back
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
};

export default AnimatedGoBackButton;

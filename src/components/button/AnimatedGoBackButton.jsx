import React, { useState } from "react";
import ArrowLeftIcon from "../../icons/ArrowLeftIcon.jsx";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useWindowWidth from "../../hooks/useWindowWidth.js";

const AnimatedGoBackButton = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [showText, setShowText] = useState(false);
  const currentWindowWidth = useWindowWidth();

  const isMediumWidthAndGreater = currentWindowWidth >= 768;
  const isGreaterThanSmall = currentWindowWidth >= 640;

  const handleHover = (hoverState) => {
    setIsHovered(hoverState);
    if (hoverState) {
      setTimeout(() => setShowText(true), 300);
    } else {
      setShowText(false);
    }
  };

  return (
    <motion.button
      onMouseEnter={() => {
        handleHover(true);
      }}
      onMouseLeave={() => {
        handleHover(false);
      }}
      className={
        "fixed top-[50%] ml-4 mr-auto flex cursor-pointer items-center gap-4 rounded-full max-sm:size-10 sm:h-[54px] sm:w-[128px] md:h-[58px] md:w-[148px]"
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
      {isGreaterThanSmall ? (
        <motion.div
          animate={
            isMediumWidthAndGreater
              ? isHovered
                ? { minWidth: "128px" }
                : { minWidth: "58px" }
              : isHovered
                ? { minWidth: "105px" }
                : { minWidth: "54px" }
          }
          transition={{ duration: 0.4 }}
          className="flex h-full items-center gap-4 rounded-full bg-custom-gray-100"
        >
          <motion.div
            animate={
              isMediumWidthAndGreater
                ? isHovered
                  ? { x: "10%" }
                  : { x: "40%" }
                : isHovered
                  ? { x: "20%" }
                  : { x: "65%" }
            }
          >
            <ArrowLeftIcon
              className={"sm:size-6 md:size-8"}
              isHovered={isHovered}
            />
          </motion.div>
          <AnimatePresence mode={"wait"}>
            {showText && (
              <motion.p
                initial={{ opacity: 0, x: "50%" }}
                animate={{ opacity: 1, x: "15%" }}
                exit={{ opacity: 0, x: "50%" }}
                transition={{ duration: 0.1 }}
                className={"uppercase text-white sm:text-sm md:text-lg"}
              >
                Back
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div
          className={
            "flex h-full w-full items-center justify-center rounded-full bg-custom-gray-100"
          }
        >
          <ArrowLeftIcon className={"max-sm:size-6"} isHovered={isHovered} />
        </motion.div>
      )}
    </motion.button>
  );
};

export default AnimatedGoBackButton;

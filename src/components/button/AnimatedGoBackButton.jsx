import React, { useState } from "react";
import ArrowLeftIcon from "../../icons/ArrowLeftIcon.jsx";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AnimatedGoBackButton = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={"flex w-auto cursor-pointer items-center gap-4"}
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
      <ArrowLeftIcon className={"size-8"} isHovered={isHovered} />
      <motion.p
        animate={isHovered ? { x: "0%", opacity: 1 } : { x: "50%", opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        Back
      </motion.p>
    </button>
  );
};

export default AnimatedGoBackButton;

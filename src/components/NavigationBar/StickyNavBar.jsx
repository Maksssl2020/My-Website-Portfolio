import React from "react";
import { motion } from "framer-motion";
import HomeNavigationSection from "./HomeNavigationSection.jsx";
import { useLocation } from "react-router-dom";

const StickyNavBar = ({ isVisible }) => {
  const location = useLocation();

  return (
    <motion.nav
      animate={isVisible ? { y: 0 } : { y: -65 }}
      transition={{ duration: 0.3, type: "just" }}
      className={
        "fixed z-20 mt-2 flex h-[65px] w-[850px] items-center justify-center self-center rounded-full border-2 border-custom-gray-100 bg-custom-black-100 px-16"
      }
    >
      <HomeNavigationSection location={location} />
    </motion.nav>
  );
};

export default StickyNavBar;

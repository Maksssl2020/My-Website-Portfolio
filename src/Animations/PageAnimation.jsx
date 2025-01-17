import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageAnimation = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

export default PageAnimation;

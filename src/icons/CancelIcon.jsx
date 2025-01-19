import React from "react";
import { motion } from "framer-motion";

const CancelIcon = ({ className, isHovered }) => {
  return (
    <motion.svg
      className={className}
      animate={isHovered ? { stroke: "#0066FF" } : { stroke: "#FFFFFF" }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </motion.svg>
  );
};

export default CancelIcon;

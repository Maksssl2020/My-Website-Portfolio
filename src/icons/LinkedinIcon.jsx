import React, { useState } from "react";
import { motion } from "framer-motion";

const LinkedinIcon = ({ className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.svg
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={
        isHovered
          ? { fill: "#0066FF", borderColor: "#0066FF", scale: 1.05 }
          : { fill: "#FFFFFF", borderColor: "#FFFFFF", scale: 1.0 }
      }
      transition={{ duration: 0.2, type: "just" }}
      viewBox="0 -4 24 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M12 9.55C12.917 8.613 14.111 8 15.5 8a5.5 5.5 0 0 1 5.5 5.5V21h-2v-7.5a3.5 3.5 0 0 0-7 0V21h-2V8.5h2v1.05zM5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-1 2h2V21H4V8.5z" />
      </g>
    </motion.svg>
  );
};

export default LinkedinIcon;

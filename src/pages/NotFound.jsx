import React, { useState } from "react";
import { motion } from "framer-motion";
import HomeIcon from "../icons/HomeIcon.jsx";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={
        "flex min-h-[70.86vh] w-full flex-col items-center justify-center gap-8"
      }
    >
      <div
        className={
          "pink-violet-blue-background-gradient flex w-auto flex-col items-center justify-center gap-4 rounded-lg max-md:mx-4 max-md:px-4 max-md:py-6 md:p-8"
        }
      >
        <h1 className={"font-bold text-white max-md:text-2xl md:text-4xl"}>
          ERROR 404 :0
        </h1>
        <h1 className={"font-bold text-white max-md:text-xl md:text-3xl"}>
          Ooops, this page is outside of the universe!
        </h1>
        <p className={"text-white max-md:text-sm"}>
          The page you're trying to access doesn't exist or has been moved.
        </p>
      </div>

      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate("/My-Website-Portfolio/")}
        whileHover={{ scale: 1.1 }}
        animate={
          isHovered
            ? { scale: 1.1, boxShadow: "0px 8px 15px #0066FF" }
            : { scale: 1.0, boxShadow: "0px 0px 0px #000000" }
        }
        transition={{ duration: 0.3 }}
        className={
          "flex w-auto gap-4 rounded-lg border-2 border-custom-blue-100 py-4 text-custom-blue-100 max-md:px-6 max-md:text-xl md:px-8 md:text-2xl"
        }
      >
        <p>Go to home</p>
        <HomeIcon className={"max-md:size-7 md:size-8"} />
      </motion.button>
    </div>
  );
};

export default NotFound;

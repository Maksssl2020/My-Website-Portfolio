import React from "react";
import { motion } from "framer-motion";

const SectionBanner = ({ title }) => {
  return (
    <div className={"flex flex-col items-center"}>
      <motion.div
        initial={{ x: "100px" }}
        animate={{ x: ["100px", "-100px", "100px"] }}
        transition={{ duration: 5, repeat: Infinity }}
        className={"w-[50px] rounded-full h-[4px] bg-custom-violet-100"}
      />
      <h1 className={"text-6xl text-white uppercase my-4"}>{title}</h1>
      <motion.div
        initial={{ x: "-100px" }}
        animate={{ x: ["-100px", "100px", "-100px"] }}
        transition={{ duration: 5, repeat: Infinity }}
        className={"w-[50px] rounded-full h-[4px] bg-custom-violet-100"}
      />
    </div>
  );
};

export default SectionBanner;

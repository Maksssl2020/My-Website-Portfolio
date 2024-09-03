import React from "react";
import DoubleChevronUp from "../../icons/DoubleChevronUp.jsx";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div
      className={
        "w-full h-[150px] relative mt-16 bg-custom-gray-100 flex justify-center items-center"
      }
    >
      <motion.a
        whileHover={{ y: [-5, 0, -5], cursor: "pointer" }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        href={"#home"}
        className={
          "size-14 absolute top-[-25px] rounded-full bg-custom-violet-100 flex justify-center items-center"
        }
      >
        <DoubleChevronUp className={"size-10 text-white"} />
      </motion.a>
      <p className={"text-white uppercase"}>
        Maksymilian Leszczyński &#169;2024
      </p>
    </div>
  );
};

export default Footer;

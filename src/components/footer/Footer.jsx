import React from "react";
import DoubleChevronUp from "../../icons/DoubleChevronUp.jsx";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <footer
      className={
        "gray-dark-gray-background-gradient relative mt-16 flex h-[150px] w-full items-center justify-center"
      }
    >
      <motion.a
        whileHover={{ y: [-5, 0, -5], cursor: "pointer" }}
        whileTap={{ y: [-5, 0, -5] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        href={location.pathname === "/My-Website-Portfolio/" && "#home"}
        onClick={(e) => {
          if (location.pathname !== "/My-Website-Portfolio/") {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
        }}
        className={
          "absolute top-[-25px] flex items-center justify-center rounded-lg bg-custom-blue-100 max-xs:size-12 xs:size-14"
        }
      >
        <DoubleChevronUp className={"text-white max-xs:size-8 xs:size-10"} />
      </motion.a>
      <p className={"uppercase text-white max-xs:text-xs xs:text-sm"}>
        Maksymilian Leszczyński &#169;2024
      </p>
    </footer>
  );
};

export default Footer;

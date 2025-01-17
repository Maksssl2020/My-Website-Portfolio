import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedGoBackButton from "../button/AnimatedGoBackButton.jsx";
import UnitedKingdomFlagIcon from "../../icons/UnitedKingdomFlagIcon.jsx";
import PolandFlagIcon from "../../icons/PolandFlagIcon.jsx";

const Header = ({ isVisible }) => {
  const location = useLocation();
  return (
    <motion.header
      animate={isVisible ? { y: 0 } : { y: -100 }}
      transition={{ duration: 0.3, type: "just" }}
      className={`gray-dark-gray-background-gradient sticky left-0 top-0 z-50 h-[65px] w-full px-8 py-4`}
    >
      <div
        className={
          "flex h-full w-auto items-center gap-6 text-xl tracking-wider text-white"
        }
      >
        {location.pathname !== "/My-Website-Portfolio/" && (
          <AnimatedGoBackButton />
        )}

        <div className={"relative ml-6 flex h-auto w-auto text-lg"}>
          <div
            className={`absolute -z-10 h-[40px] w-[125px] rounded-lg bg-custom-blue-100`}
          />
          <a href={"assets/resume-english.pdf"} target={"_blank"}>
            <motion.button
              whileHover={{ x: "-3%", y: "-6%" }}
              className={`h-[40px] w-[125px] rounded-lg border border-custom-blue-100 bg-custom-gray-100 px-6 font-normal text-custom-blue-100`}
            >
              Resume
            </motion.button>
          </a>
        </div>
        <UnitedKingdomFlagIcon
          className={"size-[40px] w-fit stroke-custom-blue-100 stroke-2"}
        />
        <PolandFlagIcon className={"size-[40px] w-fit fill-white"} />
        <div className={"ml-auto flex items-center max-xs:gap-2 xs:gap-4"}>
          <motion.h2
            animate={{
              backgroundPositionX: [
                "0%",
                "15%",
                "35%",
                "50%",
                "100%",
                "50%",
                "35%",
                "15%",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className={
              "gradient-text-for-animation text-center max-xs:mr-2 max-xs:w-[100px] max-2xs:text-xs 2xs:text-xs xs:mr-4 xs:text-sm sm:text-[16px] md:text-lg xl:text-xl"
            }
          >
            Maksymilian Leszczyński
          </motion.h2>
          <Link
            to={"https://www.linkedin.com/in/maksymilianleszczynski/"}
            target={"_blank"}
          >
            <motion.img
              whileHover={{ scale: 1.15 }}
              className={
                "inset-0 rounded-full object-cover max-sm:size-8 sm:size-10 md:size-10"
              }
              src={"assets/linkedin-icon.svg"}
              alt={"linkedin-icon"}
            />
          </Link>
          <Link to={"https://github.com/Maksssl2020"} target={"_blank"}>
            <motion.img
              whileHover={{ scale: 1.15 }}
              className={
                "inset-0 rounded-full bg-white object-cover max-sm:size-8 sm:size-10 md:size-10"
              }
              src="assets/github-icon.SVG"
              alt={"linkedin-icon"}
            />
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

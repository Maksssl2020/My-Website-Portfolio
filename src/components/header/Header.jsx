import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LinkedinIcon from "../../icons/LinkedinIcon.jsx";
import GithubCatIcon from "../../icons/GithubCatIcon.jsx";
import { useTranslation } from "react-i18next";
import HeaderAccordion from "../accordion/HeaderAccordion.jsx";
import LanguageChangeButtons from "../button/LanguageChangeButtons.jsx";

const Header = ({ isVisible }) => {
  const { t } = useTranslation();

  return (
    <motion.header
      animate={isVisible ? { y: -1 } : { y: -100 }}
      transition={{ duration: 0.3, type: "just" }}
      className={`gray-dark-gray-background-gradient sticky left-0 top-0 z-50 h-[65px] w-full px-8 py-4`}
    >
      <div
        className={
          "flex h-full w-auto items-center gap-6 text-xl tracking-wider text-white"
        }
      >
        <img
          src={"./assets/Logo.svg"}
          alt={"site-logo"}
          className={"max-sm:size-[60px] sm:size-[70px] lg:size-[80px]"}
        />
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

        <div className={"ml-auto md:hidden"}>
          <HeaderAccordion isHeaderVisible={isVisible} />
        </div>

        <div
          className={
            "ml-auto flex items-center max-md:hidden max-xs:gap-2 xs:gap-4"
          }
        >
          <div className={"relative ml-6 flex h-auto w-auto text-lg"}>
            <div
              className={`absolute -z-10 rounded-lg bg-custom-blue-100 max-lg:h-[35px] max-lg:w-[100px] lg:h-[40px] lg:w-[125px]`}
            />
            <a href={"assets/resume-english.pdf"} target={"_blank"}>
              <motion.button
                whileHover={{ x: "-3%", y: "-6%" }}
                className={`flex items-center justify-center rounded-lg border border-custom-blue-100 bg-custom-gray-100 font-normal text-custom-blue-100 max-lg:h-[35px] max-lg:w-[100px] max-lg:text-sm lg:h-[40px] lg:w-[125px] lg:px-6`}
              >
                {t("resumeButton")}
              </motion.button>
            </a>
          </div>

          <span className={"h-10 w-2 rounded-full bg-custom-gray-100"} />

          <LanguageChangeButtons
            className={"max-lg:size-8 max-lg:pt-0.5 max-lg:text-sm lg:size-10"}
          />

          <span className={"h-10 w-2 rounded-full bg-custom-gray-100"} />

          <Link
            to={"https://www.linkedin.com/in/maksymilianleszczynski/"}
            target={"_blank"}
          >
            <LinkedinIcon
              className={
                "rounded-lg border-2 fill-white max-lg:size-8 lg:size-10"
              }
            />
          </Link>
          <Link to={"https://github.com/Maksssl2020"} target={"_blank"}>
            <GithubCatIcon
              className={
                "rounded-lg border-2 fill-white max-lg:size-8 lg:size-10"
              }
            />
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

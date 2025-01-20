import React, { useState } from "react";
import HamburgerIcon from "../../icons/HamburgerIcon.jsx";
import { AnimatePresence, motion } from "framer-motion";
import CancelIcon from "../../icons/CancelIcon.jsx";
import { Link } from "react-router-dom";
import LinkedinIcon from "../../icons/LinkedinIcon.jsx";
import GithubCatIcon from "../../icons/GithubCatIcon.jsx";
import { useTranslation } from "react-i18next";
import LanguageChangeButtons from "../button/LanguageChangeButtons.jsx";
import useWindowWidth from "../../hooks/useWindowWidth.js";

const HeaderAccordion = ({ isHeaderVisible }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();
  const currentWindowWidth = useWindowWidth();

  const handleButtonHover = (hoverState) => {
    if (currentWindowWidth > 440) {
      setIsHovered(hoverState);
    } else {
      setIsHovered(false);
    }
  };

  return (
    <div className={"relative flex flex-col overflow-hidden"}>
      <motion.button
        onMouseEnter={() => handleButtonHover(true)}
        onMouseLeave={() => handleButtonHover(false)}
        whileHover={{ borderColor: "#0066FF" }}
        onClick={() => setIsOpen(!isOpen)}
        className={
          "flex items-center justify-center rounded-xl border-2 max-sm:size-8 sm:size-10"
        }
      >
        <AnimatePresence mode={"wait"}>
          {isOpen ? (
            <motion.p
              key={"cancel"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CancelIcon
                isHovered={isHovered}
                className={"stroke-1 max-sm:size-6 sm:size-8"}
              />
            </motion.p>
          ) : (
            <motion.p
              key={"hamburger"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <HamburgerIcon
                isHovered={isHovered}
                className={"stroke-1 max-sm:size-6 sm:size-8"}
              />
            </motion.p>
          )}
        </AnimatePresence>
      </motion.button>
      <motion.div
        initial={{ opacity: 0, height: 0, y: -55, x: -100 }}
        animate={
          isOpen && isHeaderVisible
            ? { opacity: 1, height: "200px", y: 55, x: -100 }
            : { opacity: 0, height: 0 }
        }
        transition={{ duration: 0.3 }}
        className={
          "gray-dark-gray-background-gradient fixed flex w-[150px] flex-col items-center justify-between overflow-hidden rounded-lg border-2 border-custom-gray-100 p-2"
        }
      >
        <div className={"flex w-full justify-center gap-4"}>
          <Link
            to={"https://www.linkedin.com/in/maksymilianleszczynski/"}
            target={"_blank"}
          >
            <LinkedinIcon
              className={"size-10 rounded-lg border-2 fill-white"}
            />
          </Link>
          <Link to={"https://github.com/Maksssl2020"} target={"_blank"}>
            <GithubCatIcon
              className={"size-10 rounded-lg border-2 fill-white"}
            />
          </Link>
        </div>

        <span className={"h-0.5 w-full rounded-full bg-custom-gray-100"} />

        <LanguageChangeButtons className={"size-10"} />

        <span className={"h-0.5 w-full rounded-full bg-custom-gray-100"} />

        <div className={"relative flex h-auto w-[125px] text-lg"}>
          <div
            className={`absolute -z-10 h-[40px] w-[125px] rounded-lg bg-custom-blue-100`}
          />
          <a href={"assets/resume-english.pdf"} target={"_blank"}>
            <motion.button
              whileHover={{ x: "-3%", y: "-6%" }}
              className={`h-[40px] w-[125px] rounded-lg border border-custom-blue-100 bg-custom-gray-100 px-6 font-normal text-custom-blue-100`}
            >
              {t("resumeButton")}
            </motion.button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default HeaderAccordion;

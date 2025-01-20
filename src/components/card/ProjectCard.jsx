import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useTextareaResize from "../../hooks/useTextareaResize.js";
import { useTranslation } from "react-i18next";
import useWindowWidth from "../../hooks/useWindowWidth.js";

const ProjectCard = ({ title, image, description, pageName, isFlipped }) => {
  const { t } = useTranslation();
  const [isImageContainerHovered, setIsImageContainerHovered] = useState(false);
  const [isTextareaHovered, setIsTextAreaHovered] = useState(false);
  const textareaRef = useRef(null);
  const navigate = useNavigate();
  const currentWindowWidth = useWindowWidth();
  const isSmallScreen = currentWindowWidth < 768;

  useTextareaResize(textareaRef, description);

  return (
    <motion.div
      className={`xs:h-min-[400px] relative flex w-full flex-col items-center justify-between rounded-lg max-md:h-[425px] max-sm:h-fit md:h-[315px] lg:h-[380px]`}
    >
      <div
        onMouseEnter={() => setIsImageContainerHovered(true)}
        onMouseLeave={() => setIsImageContainerHovered(false)}
        className={`absolute flex h-full cursor-pointer items-center justify-center overflow-hidden rounded-t-lg max-md:w-full md:w-[465px] lg:w-[565px] ${isFlipped ? "md:right-0" : "md:left-0"}`}
        onClick={() => navigate(`Project/${pageName}`)}
      >
        <motion.div
          animate={
            isSmallScreen
              ? { opacity: 0.75 }
              : isImageContainerHovered
                ? { opacity: 0 }
                : { opacity: 0.3 }
          }
          transition={{ duration: 0.3 }}
          className={
            "absolute z-10 h-full w-full rounded-lg bg-custom-blue-300"
          }
        />
        <motion.img
          animate={
            isImageContainerHovered && !isSmallScreen
              ? { scale: 1.05 }
              : { scale: 1.0 }
          }
          transition={{ duration: 0.3 }}
          className={`h-full w-full rounded-lg object-cover`}
          src={image}
          alt={title}
        />
      </div>
      <div
        className={`z-10 flex h-full flex-col justify-center gap-4 max-md:w-full max-md:px-4 max-sm:py-4 md:w-[425px] md:pl-4 lg:w-[500px] ${isFlipped ? "mr-auto" : "ml-auto"}`}
      >
        <h1
          className={`font-medium text-white max-md:text-2xl max-sm:text-xl md:text-2xl ${isFlipped ? "md:mr-auto" : "md:ml-auto"}`}
        >
          {title}
        </h1>
        <motion.textarea
          onMouseEnter={() => setIsTextAreaHovered(true)}
          onMouseLeave={() => setIsTextAreaHovered(false)}
          animate={
            isTextareaHovered && !isSmallScreen
              ? { boxShadow: "0px 8px 15px #420a66" }
              : { boxShadow: "0px 0px 0px #420a66" }
          }
          transition={{
            duration: 0.3,
          }}
          readOnly
          ref={textareaRef}
          value={description}
          className={
            "project-card-description-background-gradient h-auto w-full resize-none rounded-lg py-2 font-medium text-custom-gray-200 outline-none max-md:bg-transparent max-sm:text-sm sm:text-lg md:px-4 md:text-sm lg:text-lg"
          }
        />
        <div className={"relative flex h-auto w-auto"}>
          <div
            className={`absolute bottom-0 -z-10 h-[45px] w-[150px] rounded-sm bg-custom-blue-100 ${!isFlipped && "right-0"}`}
          />
          <motion.button
            whileHover={
              isFlipped ? { x: "2%", y: "-4%" } : { x: "-2%", y: "-4%" }
            }
            className={`mt-6 h-[45px] w-[150px] rounded-sm border-2 border-custom-blue-100 bg-custom-black-100 px-6 py-2 font-medium text-custom-blue-100 ${isFlipped ? "mr-auto" : "ml-auto"}`}
            onClick={() => navigate(`Project/${pageName}`)}
          >
            {t("showMoreButton")}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

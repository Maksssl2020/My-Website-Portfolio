import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useTextareaResize from "../../hooks/useTextareaResize.js";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ title, image, description, pageName, isFlipped }) => {
  const { t } = useTranslation();
  const [isImageContainerHovered, setIsImageContainerHovered] = useState(false);
  const [isTextareaHovered, setIsTextAreaHovered] = useState(false);
  const textareaRef = useRef(null);
  const navigate = useNavigate();

  useTextareaResize(textareaRef, description);

  return (
    <motion.div
      className={`relative flex h-[380px] w-full flex-col items-center justify-between rounded-lg`}
    >
      <div
        onMouseEnter={() => setIsImageContainerHovered(true)}
        onMouseLeave={() => setIsImageContainerHovered(false)}
        className={`absolute flex h-[380px] w-[565px] cursor-pointer items-center justify-center overflow-hidden rounded-t-lg ${isFlipped ? "right-0" : "left-0"}`}
        onClick={() => navigate(pageName)}
      >
        <motion.div
          animate={isImageContainerHovered ? { opacity: 0 } : { opacity: 0.3 }}
          transition={{ duration: 0.3 }}
          className={
            "absolute z-10 h-full w-full rounded-lg bg-custom-blue-100"
          }
        />
        <motion.img
          animate={isImageContainerHovered ? { scale: 1.05 } : { scale: 1.0 }}
          transition={{ duration: 0.3 }}
          className={`h-full w-full rounded-lg object-cover`}
          src={image}
          alt={title}
        />
      </div>
      <div
        className={`z-10 flex h-full w-[500px] flex-col justify-center gap-4 pl-4 ${isFlipped ? "mr-auto" : "ml-auto"}`}
      >
        <h1
          className={`text-2xl font-medium text-white ${isFlipped ? "mr-auto" : "ml-auto"}`}
        >
          {title}
        </h1>
        <motion.textarea
          onMouseEnter={() => setIsTextAreaHovered(true)}
          onMouseLeave={() => setIsTextAreaHovered(false)}
          animate={
            isTextareaHovered
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
            "project-card-description-background-gradient h-auto w-full resize-none rounded-lg px-4 py-2 text-lg font-medium text-custom-gray-200 outline-none"
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
            onClick={() => navigate(pageName)}
          >
            {t("showMoreButton")}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

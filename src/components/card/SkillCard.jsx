import React from "react";
import { motion } from "framer-motion";
import PlusIcon from "../../icons/PlusIcon.jsx";

const SkillCard = ({ imageLink, title, skillDocs }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(skillDocs)}
      className={
        "relative h-[250px] w-full border-2 border-custom-gray-100 bg-transparent p-4"
      }
    >
      <PlusIcon className={"absolute -left-3 -top-3 size-6 text-white"} />
      <PlusIcon className={"absolute -right-3 -top-3 size-6 text-white"} />
      <PlusIcon className={"absolute -bottom-3 -left-3 size-6 text-white"} />
      <PlusIcon className={"absolute -bottom-3 -right-3 size-6 text-white"} />
      <motion.div
        className={
          "relative flex h-full w-full cursor-pointer items-center justify-center rounded-xl p-4 text-white"
        }
      >
        <motion.div
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          className={
            "pink-violet-blue-background-gradient absolute left-0 top-0 -z-10 h-full w-full rounded-xl"
          }
          transition={{ duration: 0.6 }}
        ></motion.div>
        <div
          className={
            "relative flex aspect-[1] h-full w-auto items-center justify-center"
          }
        >
          <div
            className={
              "absolute -z-10 flex aspect-[1] h-full w-auto flex-col items-center justify-center rounded-full bg-custom-black-100 bg-opacity-60 blur-sm"
            }
          ></div>
          <div
            className={
              "flex flex-col items-center justify-center gap-2 font-bold text-white"
            }
          >
            <h1 className={"text-3xl"}>{title}</h1>
            <img className={"size-14"} src={imageLink} alt={title} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;

import React from "react";
import { motion } from "framer-motion";
import ArrowDownIcon from "../../icons/ArrowDownIcon.jsx";

const GreetingsSection = () => {
  const sentence = "I'm a full stack web developer.";
  const sentenceLetters = sentence.split("");

  const lettersContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 * i },
    }),
  };

  const child = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { type: "spring", damping: 12 } },
  };

  return (
    <div className={"w-full h-[100vh] flex items-center justify-center"}>
      <div className={"flex flex-col text-white text-center gap-4"}>
        <h1 className={"text-6xl font-medium"}>
          Hello, I'm <span className={"text-custom-violet-100"}>Maks</span>.
        </h1>
        <h1 className={"text-6xl font-medium"}>
          <motion.span
            className={"inline-block"}
            variants={lettersContainer}
            initial="hidden"
            animate="visible"
          >
            {sentenceLetters.map((letter, index) => (
              <motion.span
                key={index}
                variants={child}
                className={"inline-block"}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.span>
        </h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className={
            "w-[350px] h-[75px] flex rounded-xl text-custom-violet-100 justify-center items-center mt-4 self-center gap-2 border-2 border-custom-violet-100"
          }
        >
          <p className={"text-3xl "}>Find out more</p>
          <ArrowDownIcon className={"size-6 stroke-2"} />
        </motion.button>
      </div>
    </div>
  );
};

export default GreetingsSection;

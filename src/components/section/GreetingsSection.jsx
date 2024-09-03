import React from "react";
import { motion } from "framer-motion";
import ArrowDownIcon from "../../icons/ArrowDownIcon.jsx";
import Section from "./Section.jsx";
import AnimatedGreetingButton from "../button/AnimatedGreetingButton.jsx";

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
    <Section id={"home"}>
      <div className={"flex flex-col text-white text-center gap-4"}>
        <h1 className={"text-6xl font-medium"}>
          Hello, I'm <span className={"violet-text-gradient"}>Maks</span>.
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
        <AnimatedGreetingButton />
      </div>
    </Section>
  );
};

export default GreetingsSection;

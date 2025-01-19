import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section.jsx";
import AnimatedGreetingButton from "../button/AnimatedGreetingButton.jsx";
import { useTranslation } from "react-i18next";

const GreetingsSection = () => {
  const { t } = useTranslation();
  const [isSectionVisible, setIsSectionVisible] = React.useState(false);
  const [sentence, setSentence] = useState(t("greetingSecondLine"));
  const sentenceLetters = sentence.split("");

  useEffect(() => {
    setIsSectionVisible(false);

    const timer = setTimeout(() => {
      setSentence(t("greetingSecondLine"));
      setIsSectionVisible(true);
    });

    return () => clearTimeout(timer);
  }, [t]);

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
    <Section id={"home"} setVisibility={setIsSectionVisible}>
      <div className={"flex flex-col gap-4 text-center text-white"}>
        <h1
          className={
            "font-medium 3xs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          }
        >
          {t("greetingFirstLine")}
          <span className={"pink-violet-blue-text-gradient"}>Maks</span>.
        </h1>
        <h1
          className={
            "font-medium 3xs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          }
        >
          <motion.span
            className={"inline-block"}
            variants={lettersContainer}
            initial="hidden"
            animate={isSectionVisible ? "visible" : "hidden"}
          >
            {isSectionVisible &&
              sentenceLetters.map((letter, index) => (
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

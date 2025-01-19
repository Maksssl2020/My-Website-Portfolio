import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const LanguageChangeButtons = ({ className }) => {
  const { i18n } = useTranslation();
  const [chosenLanguage, setChosenLanguage] = useState(i18n.language);

  const handleChangeLanguage = (languageName) => {
    setChosenLanguage(languageName);
    i18n.changeLanguage(languageName);
  };

  return (
    <div className={"flex w-full justify-center gap-4"}>
      <motion.button
        whileHover={{
          color: "#0066FF",
          borderColor: "#0066FF",
          scale: 1.05,
        }}
        animate={
          chosenLanguage === "en"
            ? { color: "#0066FF", borderColor: "#0066FF" }
            : { color: "#FFFFFF", borderColor: "#FFFFFF" }
        }
        onClick={() => handleChangeLanguage("en")}
        className={`rounded-lg border-2 ${className}`}
      >
        EN
      </motion.button>
      <motion.button
        whileHover={{
          color: "#0066FF",
          borderColor: "#0066FF",
          scale: 1.05,
        }}
        animate={
          chosenLanguage === "pl"
            ? { color: "#0066FF", borderColor: "#0066FF" }
            : { color: "#FFFFFF", borderColor: "#FFFFFF" }
        }
        onClick={() => handleChangeLanguage("pl")}
        className={`rounded-lg border-2 ${className}`}
      >
        PL
      </motion.button>
    </div>
  );
};

export default LanguageChangeButtons;

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useWindowWidth from "./useWindowWidth.js";

const useTextareaResize = (textareaRef, text) => {
  const { i18n } = useTranslation();
  const currentWindowWidth = useWindowWidth();

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text, textareaRef, i18n.language, currentWindowWidth]);
};

export default useTextareaResize;

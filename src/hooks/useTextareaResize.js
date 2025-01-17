import React, { useEffect } from "react";

const useTextareaResize = (textareaRef, text) => {
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text, textareaRef]);
};

export default useTextareaResize;

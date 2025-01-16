import React, { useEffect } from "react";
import { motion } from "framer-motion";

const SectionBanner = ({ sectionNumber, title }) => {
  const [animatedLineWidth, setAnimatedLineWidth] = React.useState(0);
  const titleRef = React.useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      setAnimatedLineWidth(titleRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className={"flex select-none flex-col items-center"}>
      <motion.div
        initial={{ x: `${animatedLineWidth / 2}px` }}
        animate={{
          x: [
            `${animatedLineWidth / 2}px`,
            `-${animatedLineWidth / 2}px`,
            `${animatedLineWidth / 2}px`,
          ],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className={
          "rounded-full bg-custom-blue-100 max-sm:h-[3px] max-xs:w-[20px] xs:w-[30px] sm:h-[4px] lg:w-[50px]"
        }
      />
      <h1
        ref={titleRef}
        className={
          "my-4 w-auto uppercase text-white max-xs:text-3xl xs:text-4xl lg:text-6xl"
        }
      >
        <span
          className={"mr-6 text-custom-blue-100"}
        >{`0${sectionNumber}.`}</span>
        {title}
      </h1>
      <motion.div
        initial={{ x: "-100px" }}
        animate={{
          x: [
            `-${animatedLineWidth / 2}px`,
            `${animatedLineWidth / 2}px`,
            `-${animatedLineWidth / 2}px`,
          ],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className={
          "rounded-full bg-custom-blue-100 max-sm:h-[3px] max-xs:w-[20px] xs:w-[30px] sm:h-[4px] lg:w-[50px]"
        }
      />
    </div>
  );
};

export default SectionBanner;

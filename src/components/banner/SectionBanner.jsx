import React, { useEffect } from "react";
import { motion } from "framer-motion";

const SectionBanner = ({ title }) => {
  const [animatedLineWidth, setAnimatedLineWidth] = React.useState(0);
  const titleRef = React.useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      setAnimatedLineWidth(titleRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className={"flex flex-col items-center"}>
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
        className={"w-[50px] rounded-full h-[4px] bg-custom-violet-100"}
      />
      <h1 ref={titleRef} className={"text-6xl text-white uppercase my-4"}>
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
        className={"w-[50px] rounded-full h-[4px] bg-custom-violet-100"}
      />
    </div>
  );
};

export default SectionBanner;

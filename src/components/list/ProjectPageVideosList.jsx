import React from "react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";

const ProjectPageVideosList = ({ videos, startIndex }) => {
  const [scope, animate] = useAnimate();
  const handleAnimate = async (element, isHovered) => {
    if (isHovered) {
      animate(
        element.target,
        { boxShadow: "0px 12px 16px #420a66" },
        { duration: 0.3 },
      );
    } else {
      animate(
        element.target,
        { boxShadow: "0px 0px 0px #420a66" },
        { duration: 0.3 },
      );
    }
  };

  return (
    <AnimatePresence mode={"wait"}>
      <motion.ul
        ref={scope}
        initial={"hidden"}
        animate={"visible"}
        exit={"hidden"}
        transition={{ staggerChildren: 0.2 }}
        className={"mt-8 flex h-auto w-full flex-col gap-8"}
      >
        {videos.map((video, index) => (
          <motion.li
            onMouseEnter={(el) => el && handleAnimate(el, true)}
            onMouseLeave={(el) => el && handleAnimate(el, false)}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: {
                x: (startIndex + index) % 2 !== 0 ? -125 : 125,
                opacity: 0,
              },
            }}
            transition={{
              type: "just",
              duration: 1.0,
            }}
            key={index}
            className={`project-page-image-video-background-gradient relative flex h-auto justify-center rounded-lg max-lg:w-full max-sm:p-1 sm:p-2 md:p-3 lg:w-[90%] lg:p-4 ${(startIndex + index) % 2 === 0 ? "ml-auto" : "mr-auto"}`}
          >
            <iframe
              className={
                "flex w-full rounded-lg max-sm:h-[325px] sm:h-[400px] md:h-[475px] lg:h-[525px]"
              }
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              src={video}
            />
          </motion.li>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
};

export default ProjectPageVideosList;

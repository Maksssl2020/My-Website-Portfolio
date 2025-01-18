import React from "react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";

const ProjectPageImagesList = ({ images, title }) => {
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
        {images.map((image, index) => (
          <motion.li
            onMouseEnter={(el) => el && handleAnimate(el, true)}
            onMouseLeave={(el) => el && handleAnimate(el, false)}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: {
                x: index % 2 !== 0 ? -125 : 125,
                opacity: 0,
              },
            }}
            transition={{
              type: "just",
              duration: 1.0,
            }}
            key={index}
            className={`project-card-description-background-gradient flex h-auto w-[90%] justify-center rounded-lg p-4 ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}
          >
            <img
              key={index}
              src={image}
              alt={`${title}${index}`}
              className={`w-full rounded-lg`}
            />
          </motion.li>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
};

export default ProjectPageImagesList;

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const List = ({ className, isVisible, children }) => {
  return (
    <AnimatePresence mode={"wait"}>
      <motion.ul
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
          hidden: {},
        }}
        initial="hidden"
        animate={isVisible && "visible"}
        exit="hidden"
        className={className}
      >
        {children}
      </motion.ul>
    </AnimatePresence>
  );
};

export default List;

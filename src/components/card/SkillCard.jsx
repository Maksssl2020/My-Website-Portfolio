import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ imageLink, title, backwardRotate }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      whileHover={{
        scale: 1.15,
        rotate: backwardRotate ? 3 : -3,
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
      }}
      whileTap={{
        scale: 1.15,
        rotate: backwardRotate ? 3 : -3,
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={
        "border-custom-violet-100 select-none group overflow-hidden relative max-sm:size-[100px] sm:w-[225px] sm:h-[70px] md:w-[275px] md:h-[85px] lg:w-[350px] lg:h-[100px] border-2 flex justify-center items-center rounded-full"
      }
    >
      <motion.div
        className={
          "sm:border-r-2 absolute bg-custom-gray-100 inset-0 -z-10 self-center border-custom-violet-100  max-sm:size-full sm:size-[70px] md:size-[85px] lg:size-[100px] flex justify-center items-center rounded-full"
        }
      >
        <img
          className={
            "max-sm:size-[65px] sm:size-[40px] md:size-[50px] lg:size-[60px] inset-0 object-cover self-center"
          }
          src={imageLink}
          alt={`${title}-icon`}
        />
      </motion.div>
      <motion.p
        animate={
          isHovered
            ? {
                background: "linear-gradient(90deg, #4386F4, #6A5ACD, #8A2BE2)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "#00000000",
              }
            : { color: "#FFFFFF" }
        }
        transition={{ duration: 0.3 }}
        className={
          "max-sm:hidden sm:text-lg text-white md:text-xl lg:text-2xl font-bold ml-[15%]"
        }
      >
        {title}
      </motion.p>
    </motion.div>
  );
};

export default SkillCard;

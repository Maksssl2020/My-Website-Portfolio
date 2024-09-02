import React from "react";
import { motion } from "framer-motion";

const headerData = ["Home", "About", "Skills", "Projects"];

const Header = () => {
  return (
    <header
      className={
        "w-full sticky left-0 top-0 z-10 h-[100px] bg-custom-gray-100 p-4"
      }
    >
      <nav
        className={
          "w-auto h-full gap-6 text-2xl flex items-center text-white uppercase font-bold tracking-wider"
        }
      >
        {headerData.map((data, index) => (
          <motion.p
            key={index}
            whileHover={{ color: "#4386F4", cursor: "pointer" }}
            animate={{ opacity: 1 }}
          >
            {data}
          </motion.p>
        ))}
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import HamburgerIcon from "../../icons/HamburgerIcon.jsx";
import { AnimatePresence, motion } from "framer-motion";
import CancelIcon from "../../icons/CancelIcon.jsx";

const HeaderAccordion = ({ navigationList, activeSection }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={"w-full flex flex-col"}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={
          "max-sm:size-10 sm:size-12 md:size-14 border-2 rounded-xl flex justify-center items-center"
        }
      >
        <AnimatePresence mode={"wait"}>
          {isOpen ? (
            <motion.p
              key={"cancel"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CancelIcon
                className={"max-sm:size-8 sm:size-10 md:size-12 stroke-1"}
              />
            </motion.p>
          ) : (
            <motion.p
              key={"hamburger"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <HamburgerIcon
                className={"max-sm:size-8 sm:size-10 md:size-12 stroke-1"}
              />
            </motion.p>
          )}
        </AnimatePresence>
      </button>
      <motion.div
        initial={{ opacity: 0, height: 0, y: 100 }}
        animate={
          isOpen
            ? { opacity: 1, height: "100vh", y: 100 }
            : { opacity: 0, height: 0 }
        }
        transition={{ duration: 0.5 }}
        className={"w-full fixed inset-0 overflow-hidden bg-[#1A1A1A]"}
      >
        <div className={"p-6 gap-8 flex flex-col uppercase"}>
          <h1
            className={
              "3xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl ml-2 font-bold"
            }
          >
            MENU
          </h1>
          <ul className={"w-full flex flex-col gap-2 relative"}>
            {navigationList.map((data, index) => (
              <motion.a
                key={index}
                whileHover={{
                  color: "#4386F4",
                  cursor: "pointer",
                  background: "#282828",
                }}
                style={{ color: "#FFFFFF", background: "#1A1A1A" }}
                animate={
                  activeSection === data.toLowerCase()
                    ? { color: "#4386F4", background: "#282828" }
                    : { color: "#FFFFFF", background: "#1A1A1A" }
                }
                href={`#${data.toLowerCase()}`}
                className={
                  "3xs:text-xs sm:text-sm md:text-lg lg:text-xl font-medium w-full rounded-xl px-2 py-4"
                }
              >
                {data}
              </motion.a>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default HeaderAccordion;

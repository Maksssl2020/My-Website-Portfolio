import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeaderAccordion from "../accordion/HeaderAccordion.jsx";
import { useTranslation } from "react-i18next";

const HomeNavigationSection = ({ location }) => {
  const { i18n } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeSection, setActiveSection] = useState();

  const isEnLanguageChosen = i18n.language === "en";
  const headerData = [
    { id: "Home", name: isEnLanguageChosen ? "Home" : "Start" },
    { id: "About", name: isEnLanguageChosen ? "About" : "O mnie" },
    { id: "Skills", name: isEnLanguageChosen ? "Skills" : "Umiejętności" },
    { id: "Projects", name: isEnLanguageChosen ? "Projects" : "Projekty" },
    { id: "Contact", name: isEnLanguageChosen ? "Contact" : "Kontakt" },
  ];

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    const sections = headerData.map((section) => {
      return document.getElementById(section.id.toLowerCase());
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [activeSection, location]);

  return (
    <AnimatePresence>
      {windowWidth < 1024 ? (
        <motion.div
          key={"nav-accordion"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={"lg:hidden"}
        >
          <HeaderAccordion
            navigationList={headerData}
            activeSection={activeSection}
          />
        </motion.div>
      ) : (
        <motion.div
          key={"nav-list"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={
            "flex w-full justify-between font-bold uppercase max-lg:hidden lg:gap-5 lg:text-xl xl:gap-6"
          }
        >
          {headerData.map((data, index) => (
            <div
              className={
                "relative flex h-auto w-auto items-center justify-center"
              }
              key={index}
            >
              <motion.div
                animate={
                  activeSection === data.id.toLowerCase()
                    ? { opacity: 1 }
                    : { opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                className={
                  "pink-violet-blue-background-gradient absolute h-full w-full rounded-full"
                }
              />
              <motion.a
                key={index}
                whileHover={
                  activeSection !== data.id.toLowerCase()
                    ? {
                        cursor: "pointer",
                        background: "#303030",
                      }
                    : {}
                }
                href={`#${data.id.toLowerCase()}`}
                style={{ color: "#FFFFFF" }}
                className={"z-10 rounded-full px-6 py-2"}
              >
                {data.name}
              </motion.a>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HomeNavigationSection;

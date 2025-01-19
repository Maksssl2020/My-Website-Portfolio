import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useWindowWidth from "../../hooks/useWindowWidth.js";

const HomeNavigationSection = ({ location }) => {
  const { i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const currentWindowWidth = useWindowWidth();
  const carouselRef = useRef();

  const isEnLanguageChosen = i18n.language === "en";
  const headerData = [
    { id: "Home", name: isEnLanguageChosen ? "Home" : "Start" },
    { id: "About", name: isEnLanguageChosen ? "About" : "O mnie" },
    { id: "Skills", name: isEnLanguageChosen ? "Skills" : "Umiejętności" },
    { id: "Projects", name: isEnLanguageChosen ? "Projects" : "Projekty" },
    { id: "Contact", name: isEnLanguageChosen ? "Contact" : "Kontakt" },
  ];

  useEffect(() => {
    const sections = headerData.map((section) => {
      return document.getElementById(section.id.toLowerCase());
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = headerData.findIndex(
              (section) => section.id.toLowerCase() === entry.target.id,
            );
            setActiveIndex(index);
          }
        });
      },
      { threshold: currentWindowWidth >= 700 ? 0.4 : 0.25 },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [activeIndex, currentWindowWidth, headerData, location]);

  useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const carouselElem = carousel.children[activeIndex];

      if (carouselElem) {
        const offset =
          carouselElem.offsetLeft +
          carouselElem.offsetWidth / 2 -
          carousel.offsetWidth / 2;
        carousel.scrollTo({
          left: offset,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  return (
    <AnimatePresence>
      <motion.ul
        ref={carouselRef}
        key={"nav-list"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={
          "flex w-full justify-between font-bold uppercase max-md:gap-2 max-md:overflow-x-hidden max-md:scroll-smooth max-sm:text-sm"
        }
      >
        {headerData.map((data, index) => (
          <div
            className={
              "relative flex h-auto w-auto items-center justify-center"
            }
            key={index}
          >
            <motion.li
              animate={activeIndex === index ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={
                "pink-violet-blue-background-gradient absolute h-full w-full rounded-full"
              }
            />
            <motion.a
              key={index}
              whileHover={
                activeIndex !== index
                  ? {
                      background: "#303030",
                    }
                  : {}
              }
              href={`#${data.id.toLowerCase()}`}
              style={{ color: "#FFFFFF" }}
              className={`z-10 rounded-full px-6 py-2`}
            >
              {data.name}
            </motion.a>
          </div>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
};

export default HomeNavigationSection;

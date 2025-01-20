import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useWindowWidth from "../../hooks/useWindowWidth.js";

const HomeNavigationSection = ({ location }) => {
  const { i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState();
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
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [activeSection, currentWindowWidth, location]);

  useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const children = [...carousel.children];
      const activeItem = children.find(
        (item) => item.id.toLowerCase() === activeSection,
      );

      if (activeItem) {
        const activeItemWidth = activeItem.offsetWidth;
        const activeItemLeft = activeItem.offsetLeft;
        const carouselWidth = carousel.offsetWidth;

        const scrollPosition =
          activeItemLeft + activeItemWidth / 2 - carouselWidth / 2;

        if (scrollPosition !== carousel.scrollLeft) {
          carousel.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
          });
        }
      }
    }
  }, [activeSection]);

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
          <li
            id={data.id}
            key={index}
            className={
              "relative flex h-auto w-auto items-center justify-center"
            }
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
              whileHover={
                activeSection !== data.id.toLowerCase()
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
          </li>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
};

export default HomeNavigationSection;

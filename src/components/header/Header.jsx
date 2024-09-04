import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeaderAccordion from "../accordion/HeaderAccordion.jsx";

const headerData = ["Home", "About", "Skills", "Projects", "Contact"];

const Header = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [activeSection, setActiveSection] = React.useState();

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    const sections = headerData.map((section) => {
      return document.getElementById(section.toLowerCase());
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header
      className={
        "w-full sticky left-0 top-0 z-10 h-[100px] bg-custom-gray-100 px-8 py-4"
      }
    >
      <nav
        className={
          "w-auto h-full gap-6 text-xl flex items-center text-white tracking-wider"
        }
      >
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
                "flex max-lg:hidden lg:gap-5 xl:gap-6 lg:text-xl uppercase font-bold"
              }
            >
              {headerData.map((data, index) => (
                <motion.a
                  key={index}
                  whileHover={{ color: "#4386F4", cursor: "pointer" }}
                  animate={
                    activeSection === data.toLowerCase()
                      ? { color: "#4386F4" }
                      : { color: "#FFFFFF" }
                  }
                  href={`#${data.toLowerCase()}`}
                >
                  {data}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <div className={"flex ml-auto items-center max-xs:gap-2 xs:gap-4"}>
          <h2
            className={
              "max-xs:mr-2 xs:mr-4 max-2xs:text-xs max-xs:w-[100px] text-center 2xs:text-xs xs:text-sm sm:text-[16px] md:text-lg xl:text-xl"
            }
          >
            Maksymilian Leszczyński
          </h2>
          <Link
            to={"https://www.linkedin.com/in/maksymilianleszczynski/"}
            target={"_blank"}
          >
            <img
              className={
                "inset-0 object-cover rounded-full max-sm:size-8 sm:size-10 md:size-12"
              }
              src={"assets/linkedin-icon.svg"}
              alt={"linkedin-icon"}
            />
          </Link>
          <Link to={"https://github.com/Maksssl2020"} target={"_blank"}>
            <img
              className={
                "inset-0 object-cover bg-white rounded-full max-sm:size-8 sm:size-10 md:size-12"
              }
              src="assets/github-icon.SVG"
              alt={"linkedin-icon"}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

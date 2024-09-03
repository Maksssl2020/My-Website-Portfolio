import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const headerData = ["Home", "About", "Skills", "Projects", "Contact"];

const Header = () => {
  const [activeSection, setActiveSection] = React.useState();

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
        <div className={"flex gap-6 uppercase font-bold"}>
          {headerData.map((data, index) => (
            <motion.a
              key={index}
              whileHover={{ color: "#4386F4", cursor: "pointer" }}
              animate={
                activeSection === data.toLowerCase()
                  ? { color: "#4386F4" }
                  : { color: "white" }
              }
              href={`#${data.toLowerCase()}`}
            >
              {data}
            </motion.a>
          ))}
        </div>
        <div className={"flex ml-auto items-center gap-4"}>
          <h2 className={"mr-4"}>Maksymilian Leszczyński</h2>
          <Link
            to={"https://www.linkedin.com/in/maksymilianleszczynski/"}
            target={"_blank"}
          >
            <img
              className={"inset-0 object-cover rounded-full size-12"}
              src={"src/assets/linkedin-icon.svg"}
              alt={"linkedin-icon"}
            />
          </Link>
          <Link to={"https://github.com/Maksssl2020"} target={"_blank"}>
            <img
              className={"inset-0 object-cover bg-white rounded-full size-12"}
              src={"src/assets/github-icon.svg"}
              alt={"linkedin-icon"}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

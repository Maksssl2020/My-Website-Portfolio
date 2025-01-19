import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Section = ({ id, children, setVisibility }) => {
  const location = useLocation();
  const sectionRef = React.useRef(null);

  useEffect(() => {
    if (location.pathname !== "/My-Website-Portfolio/") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisibility(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [location.pathname, setVisibility]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`flex min-h-[100vh] w-full flex-col items-center justify-center overflow-hidden max-xs:gap-8 xs:gap-16 sm:gap-20 md:gap-28 lg:gap-32 ${id === "home" ? "-mt-[100px]" : "pt-[120px]"}`}
    >
      {children}
    </section>
  );
};

export default Section;

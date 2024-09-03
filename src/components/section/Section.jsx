import React, { useEffect } from "react";

const Section = ({ id, children, setVisibility }) => {
  const sectionRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisibility(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
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
  }, [setVisibility]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`w-full min-h-[100vh] gap-32 flex flex-col items-center justify-center ${id === "home" ? "-mt-[100px]" : "pt-[120px]"}`}
    >
      {children}
    </section>
  );
};

export default Section;

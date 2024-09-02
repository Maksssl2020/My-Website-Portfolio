import React from "react";
import SectionBanner from "../banner/SectionBanner.jsx";

const AboutSection = () => {
  return (
    <div
      className={
        "w-full h-[100vh] py-16 flex flex-col gap-16 items-center justify-center"
      }
    >
      <SectionBanner title={"about"} />
      <div
        className={
          "flex justify-between rounded-l-full items-center w-[1250px]"
        }
      >
        <div
          className={
            "size-[500px] rounded-full border-4 border-custom-violet-100"
          }
        >
          <img
            className={"w-full h-full rounded-full inset-0 object-cover"}
            src={"src/assets/My-Face.jpg"}
            alt={"My-Face_picture"}
          />
        </div>
        <div
          className={
            "font-medium w-[550px] relative tracking-normal text-white text-2xl flex flex-col gap-4"
          }
        >
          <p className={"violet-text-gradient"}>
            {
              "I'm an IT student with a passion for learning new things, especially when it comes to technology. My favorite programming language is Java, but I'm always eager to explore and master new tools and languages. In my free time, I enjoy reading books, particularly those that delve into science, as well as playing computer games, watching movies, and listening to music."
            }
          </p>
          <p className={"violet-text-gradient"}>
            {
              "I'm highly detail-oriented and strive for excellence in everything I do. My goal is to become a full-stack developer, combining my love for both front-end and back-end development to create seamless, efficient, and user-friendly applications."
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

import React, { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { projectsInfoData } from "../data/projectsInfoData.js";
import Section from "../components/section/Section.jsx";
import useTextareaResize from "../hooks/useTextareaResize.js";
import GithubCatIcon from "../icons/GithubCatIcon.jsx";
import GoToWebsiteIcon from "../icons/GoToWebsiteIcon.jsx";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AnimatedGoBackButton from "../components/button/AnimatedGoBackButton.jsx";
import ProjectPageImagesList from "../components/list/ProjectPageImagesList.jsx";
import ProjectPageVideosList from "../components/list/ProjectPageVideosList.jsx";
import useWindowWidth from "../hooks/useWindowWidth.js";

const ProjectPage = () => {
  const { projectName } = useParams();
  const { i18n } = useTranslation();
  const textareaRef = useRef();
  const projectData = projectsInfoData.find(
    (project) => project.pageName === projectName,
  );

  const { title, images, videos, description, codeLink, websiteLink, tags } =
    projectData;

  useTextareaResize(textareaRef, description);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={"relative h-auto w-full"}>
      <AnimatedGoBackButton />
      <Section id={projectName}>
        <div
          className={
            "mb-auto flex h-auto flex-col gap-12 max-lg:w-[95%] lg:w-[1000px]"
          }
        >
          <h1
            className={
              "text-white max-sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            }
          >
            {i18n.language === "en" ? title.en : title.pl}
          </h1>
          <div className={"flex h-auto w-full flex-col gap-8"}>
            <div className={"flex w-full flex-wrap gap-2"}>
              {tags.map((data, index) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  key={index}
                  className={
                    "pink-violet-blue-background-gradient w-fit cursor-pointer rounded-full py-2 font-bold text-white max-md:px-2 max-md:text-sm max-sm:py-1 md:px-4 lg:px-6"
                  }
                >
                  {data}
                </motion.div>
              ))}
            </div>
            <textarea
              readOnly
              spellCheck={"false"}
              className={
                "gray-dark-gray-background-gradient h-auto w-full resize-none rounded-lg px-4 py-2 font-medium text-custom-gray-200 outline-none max-md:text-sm md:text-lg"
              }
              ref={textareaRef}
              value={i18n.language === "en" ? description.en : description.pl}
            />
            <div className={"flex h-auto w-full gap-4"}>
              <Link to={codeLink} target={"_blank"}>
                <GithubCatIcon
                  className={
                    "cursor-pointer rounded-lg border-2 max-sm:size-8 sm:size-10"
                  }
                  link={codeLink}
                />
              </Link>
              {websiteLink && (
                <Link to={websiteLink} target={"_blank"}>
                  <GoToWebsiteIcon
                    className={
                      "cursor-pointer rounded-lg border-2 max-sm:size-8 sm:size-10"
                    }
                  />
                </Link>
              )}
            </div>
          </div>

          <div className={"flex h-auto w-full flex-col"}>
            <ProjectPageImagesList images={images} title={title} />

            {videos && (
              <ProjectPageVideosList
                videos={videos}
                startIndex={images.length}
              />
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ProjectPage;

import React, { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { projectsInfoData } from "../data/projectsInfoData.js";
import Section from "../components/section/Section.jsx";
import useTextareaResize from "../hooks/useTextareaResize.js";
import GithubCatIcon from "../icons/GithubCatIcon.jsx";
import GoToWebsiteIcon from "../icons/GoToWebsiteIcon.jsx";
import { motion } from "framer-motion";

const ProjectPage = () => {
  const { projectName } = useParams();
  const textareaRef = useRef();
  const projectData = projectsInfoData.find(
    (project) => project.pageName === projectName,
  );

  const { title, images, description, codeLink, websiteLink, tags } =
    projectData;

  useTextareaResize(textareaRef, description);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={"h-auto w-full"}>
      <Section id={projectName}>
        <div className={"mb-auto flex h-auto w-[1000px] flex-col gap-12"}>
          <h1 className={"text-6xl text-white"}>{title}</h1>
          <div className={"flex h-auto w-full flex-col gap-8"}>
            <div className={"flex w-full flex-wrap gap-2"}>
              {tags.map((data, index) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  key={index}
                  className={
                    "pink-violet-blue-background-gradient w-fit rounded-full px-6 py-2 font-bold text-white"
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
                "text-custom-gray-200 gray-dark-gray-background-gradient h-auto w-full resize-none rounded-lg px-4 py-2 text-lg font-medium outline-none"
              }
              ref={textareaRef}
              value={description}
            />
            <div className={"flex h-auto w-full gap-4"}>
              <Link to={codeLink} target={"_blank"}>
                <GithubCatIcon
                  className={"size-8 cursor-pointer"}
                  link={codeLink}
                />
              </Link>
              {websiteLink && (
                <Link to={websiteLink} target={"_blank"}>
                  <GoToWebsiteIcon className={"size-8 cursor-pointer"} />
                </Link>
              )}
            </div>
          </div>

          <div className={"mt-8 flex h-auto w-full flex-col"}>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`${title}${index}`} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ProjectPage;

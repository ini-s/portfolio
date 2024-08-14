import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import "./Projects.css";

import { useEffect, useState } from "react";

import imageUrlBuilder from "@sanity/image-url";

import createClient from "../../client";

import { Image, ProjectProps } from "../../../types";

import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  const builder = imageUrlBuilder(createClient);

  const imageUrl = (image: Image) => {
    return builder.image(image).url();
  };

  const query = `*[_type == "project"] | order(order desc){
		name,
		liveURL,
		githubLink,
		"languages": languages[]->{title, stackImage},
		image,
		hexCode,
	  }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await createClient.fetch(query);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <section className="full-bleed projects-container" id="projects">
      <h2>Projects</h2>
      <div className="projects">
        {projects &&
          projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-box"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img src={imageUrl(project.image)} alt="project-img" />
              <div className="img-caption">
                <h5>{project.name}</h5>
                <div className="technologies">
                  {project.languages.map((language, index) => (
                    <img
                      key={index}
                      src={imageUrl(language.stackImage)}
                      alt="technology"
                    />
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveURL} className="web-link">
                    <FaArrowUpRightFromSquare />
                  </a>
                  {project.githubLink && (
                    <a href={project.githubLink} className="web-link">
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default Projects;

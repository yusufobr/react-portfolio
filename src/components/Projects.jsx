import React from "react";
import data from "./dammyData";
import Project from "./Project";
import { Fade } from "react-awesome-reveal";

function Projects() {
  return (
    <div
      id="projects"
      className="container max-w-screen-xl px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <Fade cascade>
        {data.map((item) => (
          <Project
            title={item.title}
            des={item.des}
            img={item.img}
            bg={item.bg}
            live={item.live}
            code={item.code}
          />
        ))}
      </Fade>
    </div>
  );
}

export default Projects;

import React from "react";
import data from "./dammyData";
import Project from "./Project";

function Projects() {
  return (
    <div id="projects" className="container px-2 mx-auto grid grid-cols-2 gap-4">
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
    </div>
  );
}

export default Projects;

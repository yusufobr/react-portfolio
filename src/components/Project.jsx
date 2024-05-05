import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

function Project(props) {
  const { des, img, title, bg, live, code, technologies } = props;
  return (
    <div className="overflow-hidden relative group h-full rounded-xl max-h-[400px] border-2 border-transparent hover:border-white">
      <div
        className={`flex flex-col justify-between bg-[${
          bg ? bg : "black"
        }] gap-4 p-6 pb-0 hover:scale-[103%] h-full transition ease-in-out duration-1000`}
      >
        <div className="flex justify-between items-center">
          <div className="w-full">
            <div className="flex justify-between">
              <span className="text-xl font-semibold text-white capitalize">
                {title}
              </span>
              <div className="flex gap-2 flex-wrap justify-end">
                {code ? (
                  <div
                    className="p-1 rounded-full bg-white text-black cursor-pointer hover:bg-black hover:text-white"
                    target="_blank"
                    href={code}
                  >
                    <a target="_blank" href={code}>
                      <AiFillGithub size={20} />
                    </a>
                  </div>
                ) : (
                  ""
                )}
                {live ? (
                  <div className="p-1 rounded-full bg-white text-black hover:bg-black hover:text-white">
                    <a target="_blank" href={live}>
                      <BiWorld size={20} />
                    </a>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <p className="text-gray-300 w-[85%]">{des}</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img className="max-h-[500px]" alt={title} src={img} />
        </div>
      </div>
      <div className="hidden rounded-lg group-hover:block w-full absolute bottom-0 left-0 bg-[#ffffff10]">
        <div className="flex flex-wrap gap-2 p-2 text-xs">
          {technologies
            ? technologies.map((tech) => (
                <span className="bg-black p-1 px-2 text-white rounded-md">
                  {tech}
                </span>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default Project;

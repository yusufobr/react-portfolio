import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

function Project(props) {
  const { des, img, title, bg, live, code } = props;
  return (
    <div className="overflow-hidden rounded-xl max-h-[500px]">
      <div
        className={`flex flex-col justify-between bg-[${
          bg ? bg : "black"
        }] gap-4 p-6 pb-0 hover:scale-[103%] h-full`}
      >
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xl font-semibold text-white capitalize">
              {title}
            </span>
            <p className="text-gray-300">{des}</p>
          </div>
          <div className="flex gap-2 flex-wrap justify-end">
            {code ? (
              <div className="p-2 rounded-full bg-white text-black hover:bg-gray-300">
                <a target="_blank" href={code}>
                  <AiFillGithub size={25} />
                </a>
              </div>
            ) : (
              ""
            )}
            {live ? (
              <div className="p-2 rounded-full bg-white text-black hover:bg-gray-300">
                <a target="_blank" href={live}>
                  <BiWorld size={25} />
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img className="max-h-[500px]" alt={title} src={img} />
        </div>
      </div>
    </div>
  );
}

export default Project;

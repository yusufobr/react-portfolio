import React from "react";
import row from '../assets/row.svg'


function Project(props) {
  return (
    <div className="overflow-hidden rounded-lg">
      <div className="flex flex-col justify-between bg-[#6B5CE5] gap-16 p-6 pb-0 hover:scale-105">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xl font-semibold text-white capitalize">{props.title}</span>
            <p className="text-gray-300">{props.des}</p>
          </div>
          <div className="p-3 rounded-full bg-white text-black hover:bg-gray-300">
            <img width={20} src={row} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img width={320} src={props.img} />
        </div>
      </div>

    </div>
  );
}

export default Project;

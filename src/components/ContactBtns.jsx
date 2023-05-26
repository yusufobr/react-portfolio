import React from "react";
import gitHub from '../assets/github.svg';
import Linkedin from '../assets/Linkedin.svg';

function ContactBtns() {
  return (
    <div className="flex items-center gap-4">
      <button
        className="py-2 px-8 pb-3 rounded-full bg-white text-black font-bold hover:bg-gray-300 "
        type="button"
      >
        Contact me
      </button>
      <div className="p-3 rounded-full bg-white text-black font-bold hover:bg-gray-300">
        <img width={16} src={gitHub} />
      </div>
      <div className="p-3 rounded-full bg-white text-black font-bold hover:bg-gray-300">
        <img width={16} src={Linkedin} />
      </div>
    </div>
  );
}

export default ContactBtns;

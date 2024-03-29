import React from "react";
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { FaAngellist } from 'react-icons/fa'
import VCardButton from "./VCardButton";

function ContactBtns() {
  return (
    <div className="flex items-center mt-8 gap-4 z-10 flex-wrap sm:flex-start sm:flex-nowrap">
      <a className="w-full sm:max-w-[150px]">
        <button
          className="py-2 px-8 pb-3 rounded-full w-full bg-black text-white font-bold hover:bg-[#d44414] sm:w-auto"
          type="button"
          
        >
          <VCardButton />
        </button>
      </a>
      <div className="flex justify-between w-full sm:justify-normal sm:gap-4">
        <div className="p-2 rounded-full bg-white text-black font-bold hover:bg-black hover:text-white">
          <a href="https://github.com/yusufobr" target="_blank">
            <AiFillGithub size={22}/>
          </a>
        </div>
        <div className="p-2 rounded-full bg-white text-black font-bold hover:bg-[#0072b1] hover:text-white">
          <a href="https://www.linkedin.com/in/youssef-oubari/" target="_blank">
            <FaLinkedinIn size={22} />
          </a>
        </div>
        <div className="p-2 rounded-full bg-white text-black font-bold hover:bg-[#E4405F] hover:text-white">
          <a href="https://www.instagram.com/yusuf.obr/" target="_blank">
            <AiFillInstagram size={22} />
          </a>
        </div>
        <div className="p-2 rounded-full bg-white text-black font-bold hover:bg-[#EC2E3A] hover:text-white">
          <a href="https://wellfound.com/u/youssef-oubari" target="_blank">
            <FaAngellist size={22} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactBtns;

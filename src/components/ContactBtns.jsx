import React from "react";
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { FaAngellist } from 'react-icons/fa'

function ContactBtns() {
  return (
    <div className="flex items-center gap-4 cnt-btn">
      <button
        className="py-2 px-8 pb-3 rounded-full bg-black text-white font-bold hover:bg-[#00000090] "
        type="button"
      >
        Contact me
      </button>
      <div className="p-3 rounded-full bg-white text-black font-bold hover:bg-black hover:text-white">
        <AiFillGithub size={20}/>
      </div>
      <div className="p-3 rounded-full bg-white text-black font-bold hover:bg-[#0072b1] hover:text-white">
        <FaLinkedinIn size={20} />
      </div>
      <div className="p-3 rounded-full bg-white text-black font-bold hover:bg-[#E4405F] hover:text-white">
        <AiFillInstagram size={20} />
      </div>
      <div className="p-3 rounded-full bg-white text-black font-bold hover:bg-[#EC2E3A] hover:text-white">
        <FaAngellist size={20} />
      </div>
    </div>
  );
}

export default ContactBtns;

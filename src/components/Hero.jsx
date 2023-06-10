import React from "react";
import img from "../assets/DSC_697.png";
import ContactBtns from "./ContactBtns";

function Hero() {
  return (
    <div className="container px-2 mx-auto grid grid-cols-6 gap-4">
      <div className="  flex flex-col justify-between relative text-white p-6 rounded-xl col-span-4 overflow-hidden">
        <img src="./bg-color.svg" className="absolute top-0 left-0 -z-10 rotatebg " />
        <div className="max-w-[500px]">
          <h2 className="text-3xl font-semibold">
            Hello, I'm Yusuf, a Frontend Developer with 2 years of experience.
          </h2>
          <p className="mt-10">
            I care a lot about using design for positive impact. and enjoy
            creating user-centric, delightful, and human experiences.
          </p>
        </div>
        <ContactBtns />
      </div>
      <div className="gradientBg2 overflow-hidden flex justify-end rounded-xl col-span-2">
        <img className="pl-4 pt-8 hover:scale-105" width={250} src={img} />
      </div>
    </div>
  );
} 

export default Hero;

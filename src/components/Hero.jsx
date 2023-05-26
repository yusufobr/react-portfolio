import React from "react";
import img from "../assets/DSC_697.png";
import ContactBtns from "./ContactBtns";

function Hero() {
  return (
    <div className="container px-2 mx-auto grid grid-cols-6 gap-4">
      <div className=" gradientBg flex flex-col justify-between text-white p-6 rounded-lg col-span-4">
        <div className="max-w-[500px]">
          <h2 className="text-3xl font-semibold">
            Hello, I'm Yusuf, a Frontend Developer with 3 years of experience.
          </h2>
          <p className="mt-10">
            I care a lot about using design for positive impact. and enjoy
            creating user-centric, delightful, and human experiences.
          </p>
        </div>
        <ContactBtns />
      </div>
      <div className="gradientBg2 overflow-hidden flex justify-end rounded-lg col-span-2">
        <img className="pl-4 pt-8 hover:scale-105" width={250} src={img} />
      </div>
    </div>
  );
} 

export default Hero;

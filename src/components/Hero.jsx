import React from "react";
import img from "../assets/DSC_697.png";
import ContactBtns from "./ContactBtns";
import bg from '../assets/3afak.svg'

function Hero() {
  return (
    <div id="home" className="container max-w-screen-xl px-4 mx-auto flex flex-wrap-reverse sm:grid sm:grid-cols-6 gap-4">
      <div className=" relative flex flex-col gap-8 w-full justify-between herobg relative text-white p-6 rounded-xl col-span-4 overflow-hidden">
        <img src={bg} className="absolute top-0 right-0 h-full opacity-10 p-1" />
        <div className="max-w-[600px] mt-4 z-10 flex flex-col gap-8">
          <p className="text-xl">
            Hello,  I'm Youssef.
          </p>
          <h2 className="text-5xl -mt-4 font-black big-ttl">
            A Full-Stack Developer.
          </h2>
          <p className="text-xl max-w-[80%]">
          Specializing in transforming ideas into web products for businesses and individuals.
          </p>
        </div>
        <ContactBtns />
      </div>
      <div className="gradientBg2 relative overflow-hidden w-full flex justify-center sm:justify-end rounded-xl sm:col-span-2">
        <img className="pl-4 pt-8 z-10 hover:scale-105" width={250} src={img} />
        <img src={bg} className="absolute top-0 left-0 h-full rotate-180 opacity-10 p-1" />
      </div>
    </div>
  );
} 

export default Hero;

import React from "react";
import ContactBtns from "./ContactBtns";
import { Fade } from "react-awesome-reveal";

function Footer() {
  return (
    <Fade triggerOnce>
      <div id="contact" className="container max-w-screen-xl mx-auto px-4 ">
        <div className="flex  flex-col justify-between h-full footerGradien p-6 rounded-xl mb-8">
          <div className="flex flex-col gap-3">
            <span className="text-3xl font-semibold">Want to work together?</span>
            <div>
              <p>
                Feel free to reach out for collaborations or just a friendly hello
              </p>
              <p>youssef.oubaari@gmail.com</p>
            </div>
          </div>
          <ContactBtns />
        </div>
      </div>
    </Fade>
  );
}

export default Footer;

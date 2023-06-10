import React from "react";
import ContactBtns from "./ContactBtns";

function Footer() {
  return (
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
  );
}

export default Footer;

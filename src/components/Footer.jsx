import React from "react";
import ContactBtns from "./ContactBtns";

function Footer() {
  return (
    <div className="container mx-auto px-2 ">
      <div className="flex  flex-col justify-between h-[250px] footerGradien p-6 rounded-lg">
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

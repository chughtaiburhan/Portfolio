import React from "react";
import logo from "../assets/logo.png";
import { SOCIAL_MEDIA_LINKS } from "../constants/index";

function Footer() {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center ">
       <h1 className="flex items-center justify-center h-10 w-14 text-3xl font-bol my-6 ">BN</h1>
      </div>
      <div className="flex items-center justify-items-center gap-8 ">
        {SOCIAL_MEDIA_LINKS.map((link, index) =>(
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.icon}
            </a>
        ))}
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy;compileTab. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;

/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <section id="footer" className="w-full  max-lg:h-full max-lg:container">
      <div className="flex py-14 h-3/4 flex-col  max-lg:h-full">
        <div className="flex flex-col justify-center px-20 w-full max-lg:px-10">
          <h2 className="text-base uppercase tracking-widest text-white">
            Location
          </h2>
          <div className="flex justify-between flex-wrap py-2 text-gray-400">
            <h4 className="text-base tracking-wide uppercase">
            198 West 21th Street, Suite 721 <br /> New York NY 1001
            </h4>
            <h4 className="text-base tracking-wide uppercase pt-5 max-lg:pt-5">
            198 West 21th Street, Suite 721 <br /> New York NY 1001
            </h4>
            
          </div>
        </div>
        <div className="flex flex-col justify-center px-20 w-full max-lg:pt-5 max-lg:px-10">
          <h2 className="text-base uppercase tracking-widest text-white">
            Open Hours
          </h2>
          <div className="flex justify-between flex-wrap py-2 text-gray-400 max-lg:flex-col">
            <h4 className="text-base tracking-wide uppercase">
              Mon-Wed 10:00-20:00 WIB
            </h4>
            <h4 className="text-base tracking-wide uppercase">
              Thu 10:00-21:00 WIB
            </h4>
            <h4 className="text-base tracking-wide uppercase">
              Fri 13:00-22:00 WIB
            </h4>
            <h4 className="text-base tracking-wide uppercase">
              Weekend 10:00-18:00 WIB
            </h4>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center copyright w-full h-1/4 py-10 px-20 text-gray-500">
        <h1>
          <span className="text-gray-400">&#169;2022</span> ZFN Resto{" "}
          <span className="text-gray-400">All Rights Reserved. Images by</span>{" "}
          GraphicBurger & Unsplash
        </h1>
      </div>
    </section>
  );
};

export default Footer;

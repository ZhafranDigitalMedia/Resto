import React, { useState } from "react";
import "./style.css";
import "aos/dist/aos.css";
import { Fade as Hamburger } from "hamburger-react";

const Header = () => {
  window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="flex items-center py-10 px-52 fixed transisi max-lg:px-5 w-full justify-between"
      id="header"
      data-aos="fade-down-right"
    >
      <div className="logo">
        <h2 className="site-logo">zfn Resto</h2>
      </div>
      <nav className="nav ml-auto block max-lg:hidden max-lg:px-5">
        <ul className="menu-list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* hamburher */}
      <div className="hidden max-lg:block">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          direction={"left"}
          color="#fff"
          rounded
        />

        {isOpen ? (
          <>
            <ul className="absolute gap-6 w-full flex flex-col left-0 top-24 py-4 px-6 mt-2 bg-white ham-menu">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default Header;

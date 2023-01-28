import React from "react";
import './style.css'

const Header = () => {

  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle("sticky", window.scrollY > 0)
  })

  return (
    <header className="header" id="header">
      <div className="logo">
        <h2 className="site-logo">zfn Resto</h2>
      </div>
      <nav className="nav">
        <ul className="menu-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import "./style.css";
import 'aos/dist/aos.css';

const Home = () => {
  return (
    <section id="home">
      <div className="bg-home max-lg:px-4 max-xl:px-10">
        <div data-Aos="zoom-in" className="justify-center items-center flex flex-col">
        <h2 className="title -mb-8 max-lg:text-6xl" data-aos="fade-down">Welcome</h2>
        <h4 className="subtitle text-white z-10 max-lg:text-5xl" data-aos-delay="500" data-aos="fade-up">zfn Resto</h4>
        <p className="minititle max-lg:text-center max-lg:text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          molestias.
        </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
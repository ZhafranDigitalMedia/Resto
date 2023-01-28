/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "./style.css";
import "aos/dist/aos.css";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  });

  return (
    <section
      id="about"
      className="flex p-32 max-lg:flex-col-reverse max-lg:px-4"
    >
      <div className="w-1/2 px-5 max-lg:px-4 max-xl:px-10 items-center max-lg:w-full">
        <div className="flex flex-col">
          <h2
            className="title -mb-10 max-lg:text-6xl max-lg:text-center"
            data-aos="fade-down"
          >
            Discover
          </h2>
          <h2
            className="subtitle z-20 max-lg:text-5xl max-lg:mt-1 max-lg:text-center"
            data-aos-delay="500"
            data-aos="fade-up"
          >
            Our Store
          </h2>
        </div>
        <p
          className="mt-8 text-gray-400 max-lg:w-full max-lg:text-center"
          data-aos="fade-up-right"
          data-aos-delay="600"
        >
          * * *
        </p>
        <p
          className="mt-4 text-center text-gray-400 leading-relaxed max-lg:px-4"
          data-aos="fade-up-right"
          data-aos-delay="700"
        >
          Voluptatibus quaerat laboriosam fugit non Ut consequatur animi est
          molestiae enim a voluptate totam natus modi debitis dicta impedit
          voluptatum quod sapiente illo saepe explicabo quisquam perferendis
          labore et illum suscipit
        </p>
        <p className="mt-6 uppercase text-lg text-black max-lg:text-center">
          <a
            className="uppercase ml-auto mt-5 text-sm relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-yellow-400 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300 "
            href="#"
            data-aos="fade-up-right"
            data-aos-delay="800"
          >
            About Us
          </a>
        </p>
      </div>
      <div
        className="w-1/2 flex max-lg:w-full"
        data-aos="fade-left"
        data-aos-delay="1000"
      >
        <img
          src="https://demos.onepagelove.com/html/resto/img/img_1.jpg"
          alt="About img"
        />
      </div>
    </section>
  );
};

export default About;

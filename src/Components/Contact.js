import React from "react";
import "./style.css";
import "aos/dist/aos.css";

const contact = () => {
  return (
    <section id="contact" className="flex p-32 max-lg:flex-col max-lg:px-4" >
      <div className="w-1/2 flex flex-col items-center max-lg:w-full" data-aos="fade-up" data-aos-delay="500">
        <div className="flex flex-col">
          <h2 className="title -mb-8 max-lg:text-6xl max-lg:text-center">Contact</h2>
          <h2 className="subtitle z-10 max-lg:text-5xl max-lg:mt-1 max-lg:text-center">Let's Chat</h2>
        </div>
        <p className="text-gray-400 leading-relaxed max-lg:px-4 mt-4 text-center">
          Voluptatibus quaerat laboriosam fugit non Ut consequatur animi est
          molestiae enim a voluptate totam natus modi debitis dicta impedit
          voluptatum quod sapiente illo saepe explicabo quisquam perferendis
          labore et illum suscipit
        </p>
      </div>
      <div className="w-1/2 max-lg:w-full px-10 max-lg:mt-5 max-lg:px-2" data-aos="fade-up-left" data-aos-delay="1000">
        <form>
          <div className="flex flex-col text-left">
            <label>Your Name</label>
            <input
              type="text"
              className="rounded-md my-2 border-gray-400 focus:border-none"
            />
          </div>
          <div className="flex flex-col text-left">
            <label>Your Email</label>
            <input
              type="text"
              className="rounded-md my-2 border-gray-400 focus:border-none"
            />
          </div>
          <div className="flex flex-col text-left">
            <label>Your Message</label>
            <textarea
              cols="30"
              rows="10"
              className="rounded-md my-2 border-gray-400 focus:border-none"
            ></textarea>
          </div>
          <div className="mt-2 max-lg:w-full">
            <button className="uppercase w-full py-2 px-5 rounded-full bg-orange-400 text-white text-sm">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default contact;

import React from "react";
import "./style.css";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzUBa48Ey7NptUoHQEmOlukRKIyIteyCDmtoWzbboWab1N1kq-FEHdDdQLmfQiNw811/exec";
  const form = document.forms["form-data"];

  const sendform = async (e) => {
    e.preventDefault();
    await fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((res) => {
        // form.reset();
        console.log("Success!", res);
      })
      .catch((error) => console.error("Error!", error.message));
      
  };
  useEffect(() => {
    sendform()
  }, []);

  return (
    <section id="contact" className="flex p-32 max-lg:flex-col max-lg:px-4">
      <div
        className="w-1/2 flex flex-col items-center max-lg:w-full"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <div className="flex flex-col">
          <h2 className="title -mb-8 max-lg:text-6xl max-lg:text-center">
            Contact
          </h2>
          <h2 className="subtitle z-10 max-lg:text-5xl max-lg:mt-1 max-lg:text-center">
            Let's Chat
          </h2>
        </div>
        <p className="text-gray-400 leading-relaxed max-lg:px-4 mt-4 text-center">
          Jika anda ingin Memberikan masukan, saran, atau pertanyaan bisa
          menghubungi kami lewat fitur ini
        </p>
      </div>
      <div
        className="w-1/2 max-lg:w-full px-10 max-lg:mt-5 max-lg:px-2"
        data-aos="fade-up-left"
        data-aos-delay="1000"
      >
        <form onSubmit={sendform} name="form-data">
          <div className="flex flex-col text-left">
            <label>Your Name</label>
            <input
              type="text"
              className="rounded-md my-2 border-gray-400 focus:border-none"
              name="name"
            />
          </div>
          <div className="flex flex-col text-left">
            <label>Your Email</label>
            <input
              type="email"
              className="rounded-md my-2 border-gray-400 focus:border-none"
              name="email"
            />
          </div>
          <div className="flex flex-col text-left">
            <label>Your Message</label>
            <textarea
              cols="30"
              rows="10"
              className="rounded-md my-2 border-gray-400 focus:border-none"
              name="message"
            ></textarea>
          </div>
          <div className="mt-2 max-lg:w-full">
            <button className="uppercase w-full py-2 px-5 rounded-full bg-orange-400 text-white text-sm" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

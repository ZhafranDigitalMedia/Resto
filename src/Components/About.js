/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './style.css'

const About = () => {
  return (
    <section id='about'>
      <div className="col-50 px-5">
        <div className="flex flex-col">
        <h2 className="title -mb-10">Discover</h2>
        <h2 className="subtitle z-20">Our Store</h2>
        </div>
        <p className="mt-8 text-gray-400">* * *</p>
        <p className="mt-4 text-center text-gray-400 leading-relaxed">Voluptatibus quaerat laboriosam fugit non Ut consequatur animi est molestiae enim a voluptate totam natus modi debitis dicta impedit voluptatum quod sapiente illo saepe explicabo quisquam perferendis labore et illum suscipit</p>
        <p className="mt-6 uppercase text-lg text-black"><a className="uppercase ml-auto mt-5 text-sm relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-yellow-400 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300 " href="#"
        >
          About Us
        </a></p>
      </div>
      <div className="col-50 flex">
        <img src="https://demos.onepagelove.com/html/resto/img/img_1.jpg" alt="About img" />
      </div>
    </section>
  )
}

export default About
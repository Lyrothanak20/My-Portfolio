import React from "react";
import AboutImg from "../assets/V-3.png";
import { IoArrowForward } from "react-icons/io5";
function About() {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-gray-900 shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-xl p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img src={AboutImg} alt="About imge" className="md:h-80" />
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leadingnormal">
                  Data Engineering
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum ipsa atque fugit delectus esse, aliquid impedit nam
                  aliquam officiis magnam. Ipsum esse unde expedita fugit
                  laudantium? Vitae, odit voluptatibus? Nostrum.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  exercitationem?
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  exercitationem?
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;

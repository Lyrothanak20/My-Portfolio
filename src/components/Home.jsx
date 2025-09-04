import React from "react";
import TextChange from "./TextChange";
// import avatarImg from "../assets/Avatar.png";
import avatarImg from "../assets/My_pic.png";
function Home() {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1> 
        <p className="text-sm md:text-2xl tracking-tight">
          An IT Engineering student at Royal University of Phnom Penh, passionate about turning technology into solutions that make an impact.  
        </p>
        <button className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      {/* <div>
            <img className="" src={avatarImg} alt="" />
        </div> */}
      <div className="w-full max-w-sm mx-auto">
        <img
          className="w-full h-auto rounded-lg object-cover"
          src={avatarImg}
          alt="ava tar"
        />
      </div>
    </div>
  );
}

export default Home;

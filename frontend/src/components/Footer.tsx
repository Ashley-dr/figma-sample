import React from "react";
import waveBg from "../assets/footerbg.svg";
import logo from "../assets/logo.svg";
import appStore from "../assets/appstore.svg";
import playStore from "../assets/playstore.svg";
import socialMedia from "../assets/socialmedia.svg";
import footershadow from "../assets/footershadow.svg";
import { FaLocationDot } from "react-icons/fa6";
import { CiPhone } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
const Footer: React.FC = () => {
  return (
    <footer
      className="max-w-full max-h-full relative -top-20 z-0  bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${waveBg})`,
        height: "160vh",
        width: "100vw",
      }}
    >
      <figure>
        <img src={footershadow} alt="" className="relative w-full" />
      </figure>
      <main className="relative -top-36">
        <figure className="flex items-center justify-items-center content-center justify-center space-x-25">
          <article className="flex-row items-center space-y-5 text-white poppins-regular text-center">
            <img src={logo} alt="" className="relative " />
            <p className="text-[#fdfdfd]">
              ©Copyright 2025.Myselfietime. All Rights Reserved
            </p>
          </article>
          <article className="space-y-5 ">
            <figure className="justify-self-center">
              <img
                src={socialMedia}
                alt="appstore"
                className="w-[80px] mt-5 bg-cover bg-center bg-no-repeat hover:cursor-pointer"
              />
            </figure>
            <p className="uppercase poppins-medium text-center text-white">
              download the app
            </p>
            <figure className="flex gap-5 justify-center">
              <img
                src={appStore}
                alt="appstore"
                className="w-[152px] bg-cover bg-center bg-no-repeat hover:cursor-pointer"
              />
              <img
                src={playStore}
                alt="playstore"
                className="w-[152px] bg-cover bg-center bg-no-repeat hover:cursor-pointer"
              />
            </figure>
          </article>
          <article className="flex-row relative top-25">
            <p className="poppins-bold text-white mb-5">
              RVE APP MAKER PTE LTD
            </p>
            <figure className="space-y-3 mb-5">
              <article className="space-y-2">
                <p className="flex items-center gap-2 poppins-bold text-white">
                  <FaLocationDot />
                  Singapore
                </p>
                <p className="poppins-thin text-white w-75 text-xs px-5">
                  Marina Bay Financial Centre Tower 3 #17-01,12 Marina
                  Boulevard, Singapore 018982
                </p>
              </article>
              <article className="space-y-2">
                <p className="flex items-center gap-2 poppins-bold text-white">
                  <FaLocationDot />
                  Philippines
                </p>
                <p className="poppins-thin text-white w-75 text-xs px-5">
                  9F IBM Plaza Eastwood Avenue, Eastwood City, Quezon City,
                  Philippines 1110
                </p>
              </article>
              <hr className="text-white" />
            </figure>
            <figure className="space-y-5">
              <p className="poppins-thin text-white w-75 text-xs flex items-center gap-2">
                <CiPhone size={25} /> (+65) 8309 9956 - (+65) 8151 7917
              </p>
              <p className="poppins-thin text-white w-75 text-xs flex items-center gap-2">
                <IoMdMail size={25} /> sales@rveappmaker.com
              </p>
              <p className="poppins-thin text-white w-75 text-xs flex items-center gap-2">
                <AiOutlineGlobal size={25} /> www.rveappmakersg.com
              </p>
            </figure>
          </article>
        </figure>
      </main>
    </footer>
  );
};

export default Footer;

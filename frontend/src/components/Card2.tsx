/* eslint-disable react-refresh/only-export-components */

import React from "react";
import personsmile from "../assets/personsmile.svg";
import ourclients from "../assets/ourclients.svg";
import doctor from "../assets/doctor.svg";
import greenline from "../assets/greenline.svg";
import selfieUsers from "../assets/selfieusers.svg";
import selfieTaken from "../assets/selfietaken.svg";
import dots from "../assets/dots.svg";
const Card2: React.FC = () => {
  return (
    <div className="relative z-20 bg-gradient-to-t from-[#f3f3f3] via-[#dfdede] to-[#f5f5f500] flex justify-self-center rounded-4xl ">
      <main className="w-[1240px] pb-5 ">
        <figure className="h-[410px] ">
          <img
            src={personsmile}
            alt="person"
            className="bg-cover bg-center bg-no-repeat absolute z-30"
          />

          <figure className="bg-[#ffffff] h-[277px] relative top-33  rounded-2xl shadow-2xl ">
            <img
              src={greenline}
              alt="greem"
              className="bg-cover bg-center bg-no-repeat absolute"
            />
            <div className=" ">
              {" "}
              <img
                src={selfieUsers}
                alt="su"
                className="bg-cover bg-center bg-no-repeat absolute right-110 top-15 "
              />
              <img
                src={selfieTaken}
                alt="st"
                className="bg-cover bg-center bg-no-repeat absolute right-30 top-15"
              />
            </div>
          </figure>
        </figure>
        <figure className="justify-items-center">
          {" "}
          <p className="uppercase text-black poppins-regular text-center pt-10  text-xl tracking-widest">
            TESTIMONIALS
          </p>
          <img
            src={ourclients}
            alt="our"
            className="bg-cover bg-center bg-no-repeat absolute z-30"
          />
        </figure>
        <figure className="h-[450px] rounded-b-3xl px-8 ">
          <figure className="bg-[#ffffff] h-[275px] px-5 flex  relative top-34 rounded-2xl shadow-2xl ">
            <img
              src={doctor}
              alt="person"
              className="bg-cover px-5 pt-4 bg-center bg-no-repeat absolute z-30"
            />
            <div className="px-75 justify-center align-center content-center ">
              <p className="uppercase poppins-medium tracking-widest text-xl mb-5">
                Dr. Stephanie Johnson
              </p>
              <p className=" inter-italic  text-[#287311] tracking-widest text-xl ">
                Got 'em all covered
              </p>
              <p className=" inter-italic-sm   text-[#000000] tracking-widest text-sm  ">
                My med reps have become more efficient as they have all Doctors
                covered. They know too well they are being watched.
              </p>
            </div>
          </figure>
          <img
            src={dots}
            alt="our"
            className="flex  justify-self-center bottom-6 bg-cover bg-center bg-no-repeat absolute z-30"
          />
        </figure>
      </main>
    </div>
  );
};

export default Card2;

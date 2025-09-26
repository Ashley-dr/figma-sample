/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import text1 from "../assets/Text1.svg";
import appstore from "../assets/appstore.svg";
import playstore from "../assets/playstore.svg";
import shadowbottom from "../assets/shadowhitefirstbg.svg";
import hand from "../assets/handphone1bg.svg";
interface FirstLandingPageProps {
  backgroundImage?: string;
}
const FirstLandingPage: React.FC<FirstLandingPageProps> = (
  props: FirstLandingPageProps
) => {
  return (
    <div
      className="max-w-full max-h-full   bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        height: "160vh",
        width: "100vw",
      }}
    >
      <main className="w-[1200px] h-[800px]    flex justify-item-center items-center justify-self-center text-white">
        <figure className="space-y-10">
          <figure className="flex-row ">
            <img
              src={text1}
              alt="text1"
              className="w-[546px] bg-cover bg-center bg-no-repeat"
            />
            <article className=" px-5 inter-regular text-[#dddddde1]">
              <p>
                What’s More Accurate Than Selfie Photos for Check-Ins and Outs?
                <br />
                Detailed with Location Accuracy and Maps. Download the App Now!
              </p>
            </article>
          </figure>
          <figure className="flex gap-4 px-5">
            <img
              src={appstore}
              alt="appstore"
              className="w-[201px] bg-cover bg-center bg-no-repeat hover:cursor-pointer"
            />
            <img
              src={playstore}
              alt="playstore"
              className="w-[201px] bg-cover bg-center bg-no-repeat hover:cursor-pointer"
            />
          </figure>
        </figure>{" "}
      </main>{" "}
      <figure className="flex justify-self-center ">
        <div
          className="absolute z-5 right-20 top-20  sm:hidden md:block bg-no-repeat"
          style={{
            backgroundImage: `url(${hand})`,
            height: "1326px",
            width: "120vh",
          }}
        ></div>{" "}
        <img
          src={shadowbottom}
          alt="white shadow"
          className="  relative bottom-60 w-full  z-10 pointer-events-none"
        />
      </figure>
    </div>
  );
};

export default FirstLandingPage;

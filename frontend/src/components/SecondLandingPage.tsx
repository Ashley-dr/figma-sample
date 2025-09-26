/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import phone from "../assets/phone.svg";
import textmyselfie from "../assets/textmyselfie.svg";
import justapeek from "../assets/justapeek.svg";
import Cards from "./Cards";
import Card2 from "./Card2";
import Footer from "./Footer";
interface SecondLandingPageProps {
  backgroundImage?: string;
}
const SecondLandingPage: React.FC<SecondLandingPageProps> = (
  props: SecondLandingPageProps
) => {
  return (
    <div
      className="max-w-full bg-[#f5f5f5] bg-cover bg-center bg-no-repeat py-24"
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        height: "1000px",
        width: "100vw",
      }}
    >
      <main className="w-[1300px] h-full    flex justify-item-center items-center justify-self-center text-white">
        <figure className="flex gap-14">
          <figure>
            <img
              src={phone}
              alt=""
              className="w-[700px] h-[637px]  bg-cover bg-center bg-no-repeat"
            />
          </figure>
          <article className="text-black ">
            <p className="uppercase text-black poppins-medium text-xl tracking-widest">
              what is
            </p>
            <img
              src={textmyselfie}
              alt=""
              className=" mb-4 bg-cover bg-center bg-no-repeat"
            />
            <article className="space-y-5">
              <p className="inter-semibold">
                "Selfie Check In...Selfie Check Out"
              </p>
              <p className="w-[460px] inter-light space-y-5">
                <p>
                  Bundy Clock...Time Cards...Biometrics... all these are things
                  of the past. What is in right now is mySelfieTime.{" "}
                </p>
                <p>
                  mySelfieTime is by far, the most accurate, most reliable, fun
                  and in style time management/monitoring system.
                </p>{" "}
                <p>
                  The website is backed up with a mobile App wherein registered
                  mobile users need to have it downloaded on their iPhone or
                  Android Phones via App Store or Google Play.
                </p>
              </p>
            </article>{" "}
            <div
              className="mt-10 flex space-x-6
          bg-[#287311]        
          backdrop-blur-md        
          px-9 rounded-full h-13 w-max
         "
            >
              <button className="text-white hover:font-bold hover:cursor-pointer  transition-colors inter-bold">
                Learn More ➝
              </button>
            </div>
          </article>
        </figure>
      </main>
      <main className="relative   bg-[#f5f5f5]  ">
        {" "}
        <article className="text-black w-[1300px] bg-[#f5f5f542] flex-col justify-item-center items-center justify-self-center  ">
          <p className="uppercase text-black poppins-medium text-xl tracking-widest">
            What MySelfieTime does
          </p>
          <img
            src={justapeek}
            alt=""
            className="w-120 bg-cover bg-center bg-no-repeat"
          />{" "}
          <div className="space-y-23">
            <figure className=" w-full">
              <Cards />
            </figure>
            <figure className=" w-full">
              <Card2 />
            </figure>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default SecondLandingPage;

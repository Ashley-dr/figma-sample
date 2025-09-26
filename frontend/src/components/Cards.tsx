/* eslint-disable react-refresh/only-export-components */

import React from "react";

import card1 from "../assets/card1.svg";
import card2 from "../assets/card2.svg";
import card3 from "../assets/card3.svg";
import card4 from "../assets/card4.svg";
import card5 from "../assets/card5.svg";
import card6 from "../assets/card6.svg";

import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import icon5 from "../assets/icon5.svg";
import icon6 from "../assets/icon6.svg";
export interface Card {
  id: number;
  title: string;
  description: string;
  description2: string;
  image: string;
  icons: string;
}
export const cardsData = [
  {
    id: 1,
    title: "Construction Companies",
    description:
      "Was John late again today? Never experience employees cheating on Time Ins and Outs anymore!",
    description2:
      "Monitor your employees' time ins with MySelfieTime. What's more accurate than checking in with Selfie Photo complete with Google map, time and location... Thus the birth of MySelfieTime...the most accurate, reliable, convenient and fun way for your Time Management System.",
    image: card1,
    icons: icon1,
  },
  {
    id: 2,
    title: "Police Station",
    description:
      "Sgt. Peter should be at the station at 9am, was he really there?",
    description2:
      "Monitor and manage your officers time ins and outs with Selfie Photos detailed with Google map, time and location. All these are possible with MySelfieTime....the most accurate, reliable, convenient and fun way for your Time Management System.",
    image: card2,
    icons: icon2,
  },
  {
    id: 3,
    title: "Family",
    description:
      "Do you want to make sure your kids and/or family members are where they really are?",
    description2:
      "It would just be like you are always beside them...monitor your family members' whereabouts with Selfie Photos detailed with Google map, time and location. All these are possible with MySelfieTime....the most accurate, reliable, convenient and fun way for your Time Management System.",
    image: card3,
    icons: icon3,
  },
  {
    id: 4,
    title: "Office",
    description:
      "Was John late again today? Never experience employees cheating on Time Ins and Outs anymore!",
    description2:
      "Monitor your employees' time ins with MySelfieTime. What's more accurate than checking in with Selfie Photo complete with Google map, time and location... Thus the birth of MySelfieTime...the most accurate, reliable, convenient and fun way for your Time Management System.",
    image: card4,
    icons: icon4,
  },
  {
    id: 5,
    title: "Deliveries",
    description: "Was the package delivered at 10am to Ms. Simpson?",
    description2:
      "Manage and monitor your delivery men's time ins and outs with Selfie Photos detailed with Google map, time and location. All these are possible with MySelfieTime....the most accurate, reliable, convenient and fun way for your Time Management System.",
    image: card5,
    icons: icon5,
  },
  {
    id: 6,
    title: "Services",
    description:
      "Did my Cable Guy install the new channel already at Mr. Johnson's residence?",
    description2:
      "Double check on your Cable Guys' time ins and outs with Selfie Photos detailed with Google map, time and location. All these are possible with MySelfieTime....the most accurate, reliable, convenient and fun way for your Time Management System.",
    image: card6,
    icons: icon6,
  },
];

const Cards: React.FC = () => {
  return (
    <div
      className="  grid grid-cols-1           
        sm:grid-cols-1       
        lg:grid-cols-3      gap-7 p-8 -skew-2"
    >
      {cardsData.map((card: Card) => (
        <div
          key={card.id}
          className="       flex flex-col
            bg-white shadow-xl rounded-3xl
            hover:shadow-2xl transition
            w-full max-w-md       
            mx-auto skew-2 "
        >
          <img src={card.image} alt={card.title} className="w-full mx-auto " />
          <div className="relative -top-10">
            <img
              src={card.icons}
              alt={card.title}
              className="w-25 h-25 mx-auto mb-2  "
            />
          </div>
          <h3 className="text-2xl relative -top-10 text-center font-semibold text-[#287311]  inter-semibold">
            {card.title}
          </h3>
          <article className="w-90 justify-self-center space-y-4 mb-4">
            <p className="text-[#4B4B4B] text-md inter-light relative -top-5 text-center">
              {card.description}
            </p>
            <p className="text-[#4B4B4B] text-md inter-light relative -top-5 text-center">
              {card.description2}
            </p>
          </article>
        </div>
      ))}
    </div>
  );
};

export default Cards;

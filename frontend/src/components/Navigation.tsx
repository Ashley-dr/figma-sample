/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

interface NavbarProps {
  logoSrc?: string;
  navItems?: string[];
  onLogin?: () => void;
}

const Navigation: React.FC<NavbarProps> = (props: NavbarProps) => {
  return (
    <nav className="w-full px-20 absolute py-5 flex justify-items-center justify-self-center items-center justify-between ">
      <div className="flex items-center">
        <img
          src={props.logoSrc}
          className="h-12 w-auto cursor-pointer object-contain"
        />
      </div>

      <div
        className="
          flex space-x-6
          bg-white/20        
          backdrop-blur-md        
          px-9 rounded-full h-14
          shadow-[0_2px_15px_rgba(0,60,20,0.9)]
        "
      >
        {(props.navItems ?? []).map((item, index) => (
          <button
            key={index}
            className="text-[#ffffff80] hover:text-white hover:font-bold hover:cursor-pointer   transition-colors poppins-regular"
          >
            {item}
          </button>
        ))}
      </div>

      <div
        className=" flex space-x-6
          bg-white/20        
          backdrop-blur-md        
          px-9 rounded-full h-14
          shadow-[0_2px_15px_rgba(0,60,20,0.9)] "
        style={{ boxShadow: "0 3px 15px rgba(20, 50, 10, 0.9)" }}
      >
        <button
          onClick={props.onLogin}
          className="text-[#ffffff80]   hover:text-white hover:font-bold hover:cursor-pointer  transition-colors poppins-regular"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navigation;

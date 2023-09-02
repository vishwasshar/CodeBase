import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center md:items-start md:flex-row md:justify-evenly bg-[#08192B] text-white pt-10 pb-32 relative gap-5">
      <div className="text-center md:text-start w-[70%] md:w-[30%]">
        <Link className=" text-4xl font-semibold">{"{CodeBase}"}</Link>
        <p className="py-5">
          With iMeet's robust collaboration features, you can easily connect
          with fellow developers, share code snippets, and brainstorm ideas in
          real-time.
        </p>
      </div>
      <div className="w-[70%] items-center md:items-start md:w-[20%] flex flex-col gap-2">
        <h4 className=" text-xl font-semibold">Quick Links</h4>
        <Link className="hover:text-[#635DFF]">Home</Link>
        <Link className="hover:text-[#635DFF]">About</Link>
        <Link className="hover:text-[#635DFF]">Contact</Link>
        <Link className="hover:text-[#635DFF]">Terms & Condition</Link>
        <Link className="hover:text-[#635DFF]">Policy & policy</Link>
      </div>
      <div className="w-[70%] items-center md:items-start md:w-[20%] flex flex-col  gap-2">
        <h4 className=" text-xl font-semibold">Contact</h4>
        <div className="flex gap-2 items-center">
          <BsFillTelephoneFill /> +91 0000000000
        </div>
        <div className="flex gap-2 items-center">
          <IoMailOutline /> imeet.mathura@gmail.com
        </div>
        <div className="flex gap-2 items-center">
          <SlLocationPin /> Mathura, Uttar Pradesh
        </div>
      </div>
      <p className="absolute bottom-0 w-full bg-[#0E2A47] text-center py-5">
        copyright @ 2023 iMeet
      </p>
    </footer>
  );
};

export default Footer;

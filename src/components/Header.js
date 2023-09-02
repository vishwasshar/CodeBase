import React, { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const showModalHandler = () => {
    setShowSidebar(true);
  };
  return (
    <>
      <Sidebar
        className={`${showSidebar ? "block" : "hidden"}`}
        setShowModal={setShowSidebar}
      />
      <header className="flex justify-between py-5 px-10 md:px-15 lg:px-20 shadow-xl">
        <Link className="text-[#635DFF] text-xl font-semibold">
          {"{CodeBase}"}
        </Link>
        <div className=" justify-center items-center gap-5 hidden md:flex">
          <Link className="font-semibold hover:text-[#635DFF]">Home</Link>
          <Link className="font-semibold hover:text-[#635DFF]">About</Link>
          <Link className="font-semibold hover:text-[#635DFF]">Contact</Link>
          <Link className="font-semibold hover:bg-gray-200 border border-gray-500 py-1 px-3 rounded-lg">
            Login
          </Link>
          <Link className="font-semibold bg-[#635DFF] text-white hover:bg-[#635Daa] border border-gray-500 py-1 px-3 rounded-lg">
            Sign Up
          </Link>
        </div>
        <button onClick={showModalHandler} className="md:hidden">
          <IoReorderThree size={30} />
        </button>
      </header>
    </>
  );
};

export default Header;

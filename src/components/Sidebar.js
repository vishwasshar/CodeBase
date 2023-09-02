import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const removeModalHandler = () => {
    props.setShowModal(false);
  };
  return (
    <div
      className={
        "h-[100vh] w-[100vw] z-30 bg-[#ffffff33] backdrop-blur-sm fixed " +
        props.className
      }
    >
      <div className="w-[80%] h-[100%] bg-white flex flex-col gap-5 items-center absolute right-0 rounded-lg">
        <button className=" p-3 mb-10 self-end" onClick={removeModalHandler}>
          <AiOutlineClose />
        </button>

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
    </div>
  );
};

export default Sidebar;

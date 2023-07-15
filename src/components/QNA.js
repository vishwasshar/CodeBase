import React from "react";
import { BsChevronDown } from "react-icons/bs";

const QNA = (props) => {
  const showHandler = () => {
    if (props.isActive === true) {
      props.setActive(null);
    } else {
      props.setActive(props.id);
    }
  };
  return (
    <ul
      onClick={() => {
        showHandler();
      }}
      className="flex flex-col gap-4 w-[100%] cursor-pointer"
    >
      <li className="rounded-lg shadow-[1px_3px_10px_1px_#cacaca] py-3 px-7 flex justify-between items-center">
        <p>{props.que}</p>
        <BsChevronDown
          size={15}
          className={`${
            props.isActive ? "rotate-180" : "rotate-0"
          } transition-transform duration-500`}
        />
      </li>
      <li
        className={`${
          props.isActive ? "visible " : "hidden "
        } rounded-lg shadow-[1px_3px_10px_1px_#cacaca] p-7 transition-opacity duration-500`}
      >
        {props.ans}
      </li>
    </ul>
  );
};

export default QNA;

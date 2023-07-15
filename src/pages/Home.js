import React, { useState } from "react";
import coding from "../images/coding.png";
import mern from "../images/mern.png";
import QNA from "../components/QNA";

const Home = () => {
  const [activeAns, setActiveAns] = useState(0);

  return (
    <div className="p-[3%_5%] sm:p-[5%_7%] md:p-[7%_10%] flex flex-col gap-28">
      <section className="flex flex-col-reverse md:flex-row gap-10 items-center">
        <div className="w-[80%] flex flex-col gap-5 items-center md:items-start">
          <h1 className="text-5xl font-semibold text-center md:text-left">
            iMeet Codebase
          </h1>
          <p className="text-xl text-justify md:text-left">
            Unlock the potential of seamless collaboration and efficient coding
            with iMeet, the leading codebase platform. Designed by developers
            for developers, iMeet is here to revolutionize the way you work,
            collaborate, and create.
          </p>
          <div className="w-[90%] flex gap-5 flex-wrap justify-center items-center">
            <button className="w-[7.5rem] py-2 rounded-xl text-white border bg-[#635DFF] ">
              Join Now
            </button>
            <button className="w-[7.5rem] py-2 rounded-xl border border-[#635DFF] ">
              Upload Code
            </button>
          </div>
        </div>
        <img src={coding} className="w-[50%]" />
      </section>
      <section className="flex items-center flex-col md:flex-row gap-10 justify-between">
        <img src={mern} className="w-[50%]" />
        <div className="w-[80%] flex flex-col gap-5 items-center">
          <h1 className="text-3xl font-semibold text-center">
            Welcome to iMeet for MERN
          </h1>
          <p className="text-xl text-justify">
            Unlock the potential of seamless collaboration and efficient coding
            with iMeet, the leading codebase platform. Designed by developers
            for developers, iMeet is here to revolutionize the way you work,
            collaborate, and create.
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-7 items-center md:px-[15%]">
        {Array(4)
          .fill(null)
          .map((item, i) => {
            return (
              <QNA
                id={i}
                key={i}
                isActive={i === activeAns}
                setActive={setActiveAns}
                que={"What is iMeet ?"}
                ans={`Join us at iMeet and unlock a world of opportunities! Engage with
                industry experts, collaborate with like-minded peers, and gain hands-on
                experience in cutting-edge technologies. Our platform fosters a
                community of growth, where students can expand their knowledge, sharpen
                their skills, and explore their passions.`}
              />
            );
          })}
      </section>
    </div>
  );
};

export default Home;

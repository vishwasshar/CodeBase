import React, { useRef, useState } from "react";
import uploadImg from "../images/upload 1.png";

const Upload = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  return (
    <section className="h-[100vh] flex items-center justify-center">
      <div
        className="w-[60vh] h-[60vh] shadow-[0_0_20px_1px_#6d6d6d] rounded-full flex items-center justify-center"
        onDragOver={(e) => {
          e.preventDefault();
          console.log("captured");
        }}
        onDrop={(e) => {
          e.preventDefault();
          setFiles(e.dataTransfer.files);
        }}
      >
        <div className="w-[80%] h-[80%] shadow-[0_0_20px_1px_#6d6d6d] rounded-full flex flex-col gap-5 justify-center items-center">
          {files ? (
            <div>
              <ul>
                {Array.from(files).map((file, i) => (
                  <li key={i}>{file.name}</li>
                ))}
                <div className=" flex flex-col items-center gap-2 py-4">
                  <button className="font-semibold bg-[#635DFF] text-white hover:bg-[#635Daa] border border-gray-500 py-1 px-3 rounded-lg">
                    Upload
                  </button>
                  <button className="font-semibold bg-[#635DFF] text-white hover:bg-[#635Daa] border border-gray-500 py-1 px-3 rounded-lg">
                    Cancel
                  </button>
                </div>
              </ul>
            </div>
          ) : (
            <>
              <img src={uploadImg} className=" w-[60%] " />
              <input
                type="file"
                multiple
                ref={inputRef}
                onChange={(e) => setFiles(e.target.files)}
                hidden
              />
              <p className="text-lg font-semibold text-center text-[#6d6d6d]">
                Upload Code
                <br /> max 20 mb
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Upload;

import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className=" w-full h-screen flex justify-center "
        style={{ backgroundColor: color }}
      >
        <div className=" bg-white flex flex-wrap justify-center gap-3  py-2  fixed px-3  rounded-2xl bottom-12">
          <button
            className=" px-3 py-2 bg-red-700  rounded-xl text-white"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className=" px-3 py-2 bg-green-700  rounded-xl text-white"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className=" px-3 py-2 bg-blue-700  rounded-xl text-white"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className=" px-3 py-2  bg-yellow-400  rounded-xl text-white"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className=" px-3 py-2  bg-lime-700  rounded-xl text-white"
            onClick={() => setColor("lime")}
          >
            Lime
          </button>
          <button
            className=" px-3 py-2  bg-red-950  rounded-xl text-white"
            onClick={() => setColor("maroon")}
          >
            Maroon
          </button>
          <button
            className=" px-3 py-2 bg-gray-700  rounded-xl text-white"
            onClick={() => setColor("gray")}
          >
            Gray
          </button>
          <button
            className=" px-3 py-2 bg-pink-700  rounded-xl text-white"
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

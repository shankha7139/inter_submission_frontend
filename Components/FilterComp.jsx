import { useState } from "react";

export default function FilterComp() {
  const [city, setCity] = useState("City");
  const [type, setType] = useState("Property Type");
  const [range, setRange] = useState("Price");

  return (
    <>
      <div>
        <div className="flex bg-zinc-300 justify-between border border-grey-300 rounded-lg py-2 px-4 gap-2.5 shadow-md shadow-grey-300">
          <button className=" relative cursor-pointer px-3 group ">
            <h3 className="text-left text-gray-500">{city}</h3>
            <h2 className="font-bold hover:underline ">Select Location</h2>
            <div className=" mt-2 absolute hidden top-full bg-zinc-200 rounded-xl group-focus:block ">
              <ul className="">
                <li
                  className=" px-8 py-2 hover:bg-zinc-300 border-b "
                  key={"Delhi"}
                  onClick={(ev) => setCity("Delhi")}
                >
                  Delhi
                </li>
                <li
                  className=" px-8 py-2 hover:bg-zinc-300 border-b "
                  key={"Mumbai"}
                  onClick={(ev) => setCity("Mumbai")}
                >
                  Mumbai
                </li>
                <li
                  className=" px-8 py-2 hover:bg-zinc-300 border-b "
                  key={"Kolkata"}
                  onClick={(ev) => setCity("Kolkata")}
                >
                  Kolkata
                </li>
                <li
                  className=" px-8 py-2 hover:bg-zinc-300 border-b "
                  key={"Chennai"}
                  onClick={(ev) => setCity("Chennai")}
                >
                  Chennai
                </li>
                <li
                  className=" px-8 py-2 hover:bg-zinc-300 border-b "
                  key={"Banglore"}
                  onClick={(ev) => setCity("Banglore")}
                >
                  Banglore
                </li>
              </ul>
            </div>
          </button>
          <div className="border border-l-2 border-black"></div>
          <button className="px-3 relative group cursor-pointer">
            <h3 className=" text-left text-gray-500">Available From</h3>
            <h2 className="font-bold">Select Move-in Date</h2>
            <div className="mt-2 p-3 absolute hidden top-full bg-zinc-200 rounded-xl group-focus:block" >
              <form action="">
                <input  className="rounded-lg" type="date" id="date" name="date" />
              </form>
            </div>
          </button>
          <div className="border border-l-2 border-black"></div>
          <button className="px-3 relative cursor-pointer group ">
            <h3 className="text-left text-gray-500">0-{range}</h3>
            <h2 className=" font-bold">Select Price Range</h2>
            <div className="mt-2 p-3 absolute hidden top-full bg-zinc-200 rounded-xl group-focus:block">
              <input
                className=""
                type="range"
                min="500"
                max="5000"
                onChange={(ev) => setRange(ev.target.value)}
              />
            </div>
          </button>
          <div className="border border-l-2 border-black"></div>
          <button className="px-3 relative cursor-pointer group ">
            <h3 className=" text-left text-gray-500">{type}</h3>
            <h2 className="font-bold">Select Property Type</h2>
            <div className=" mt-2 absolute hidden top-full bg-zinc-200 rounded-xl group-focus:block ">
              <ul className="">
                <li
                  className=" px-8 py-2 hover:bg-zinc-300 border-b "
                  key={"1-BHK"}
                  onClick={(ev) => setType("1-BHK")}
                >
                  1-BHK
                </li>
                <li
                  className=" px-8 py-2 hover:bg-zinc-300 border-b "
                  key={"2-BHK"}
                  onClick={(ev) => setType("2-BHK")}
                >
                  2-BHK
                </li>
                <li
                  className=" px-8 py-2 hover:bg-zinc-300 border-b "
                  key={"3-BHK"}
                  onClick={(ev) => setType("3-BHK")}
                >
                  3-BHK
                </li>
                <li
                  className=" px-8 py-2 hover:bg-zinc-300 border-b "
                  key={"3-BHK-sharing"}
                  onClick={(ev) => setType("3-BHK-sharing")}
                >
                  3-BHK-sharing
                </li>
              </ul>
            </div>
          </button>
          <div className="border border-l-2 border-black"></div>
          <button className="bg-indigo-400 text-white font-bold py-2 px-10 rounded-3xl hover:shadow-lg ">
            Apply
          </button>
        </div>
      </div>
    </>
  );
}

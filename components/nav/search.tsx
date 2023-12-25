"use client";
import { ChangeEventHandler, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Divider } from "../divider";

export default function Search() {
  const [data, setData] = useState({
    location: "",
    date: "Feb 19-26",
    guests: "2",
  });

  function handleInput(e: any) {
    setData((data) => ({ ...data, [e.target.name]: e.value }));
  }

  return (
    <div className="w-fit h-12 sm:pl-6 pl-4 pr-2 py-2 bg-white rounded-full hover-shadow-effect border border-gray-200 justify-start items-center gap-4 inline-flex">
      <input
        className="outline-none text-center max-w-20 text-black text-sm font-medium leading-tight truncate"
        value={data.location}
        onChange={handleInput}
        name="location"
        placeholder="enter location"
      />
      <Divider />
      <div className="text-black text-sm font-medium leading-tight truncate">
        {data.date}
      </div>
      <Divider />
      <div className="text-black text-sm font-medium leading-tight truncate w-fit">
        <input
          className="outline-none w-[2ch] text-right no-arrows"
          size={2}
          name="guests"
          type="number"
          onChange={handleInput}
          value={data.guests}
        />
        <span> guests</span>
      </div>
      <div className="w-8 h-8 justify-start items-start flex ">
        <div className="w-8 h-8 p-1 bg-rose-600 text-white rounded-[100px] justify-center items-center button-animate inline-flex">
          <FaSearch />
        </div>
      </div>
    </div>
  );
}

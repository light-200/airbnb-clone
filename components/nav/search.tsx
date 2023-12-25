import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className="w-fit h-12 sm:pl-6 pl-4 pr-2 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 ease-out border border-gray-200 justify-start items-center gap-4 inline-flex">
      <div className="text-black text-sm font-medium leading-tight truncate">
        Bordeaux
      </div>
      <div className="h-6 bg-gray-500 border border-gray-200"></div>
      <div className="text-black text-sm font-medium leading-tight truncate">
        Feb 19-26
      </div>
      <div className="h-6 bg-gray-500 border border-gray-200"></div>
      <div className="text-black text-sm font-medium leading-tight truncate">
        2 guests
      </div>
      <div className="w-8 h-8 justify-start items-start flex">
        <div className="w-8 h-8 p-1 bg-rose-600 text-white rounded-[100px] shadow justify-center items-center gap-2 inline-flex">
          <FaSearch />
        </div>
      </div>
    </div>
  );
}

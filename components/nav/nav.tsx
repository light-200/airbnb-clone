import Image from "next/image";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";

export function Nav({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 w-full items-center p-2 sm:px-6 sm:py-4 border border-gray-200 h-12 justify-between md:justify-start lg:justify-between sm:gap-6 gap-2">
      <div className="flex-start min-w-8 xl:min-w-[102px] lg:flex-1">
        <Image
          src={"/airbnb-logo.svg"}
          className="hidden xl:block min-w-[102] min-h-8"
          alt="logo"
          priority
          width={102}
          height={32}
        />
        <Image
          src={"/airbnb-logo-small.svg"}
          className="xl:hidden block"
          alt="logo"
          priority
          width={30}
          height={32}
        />
      </div>
      {children}
      <div className="h-12 items-center gap-4 flex-1 justify-end min-w-[275.95px] hidden md:flex">
        <div className="text-black text-sm font-medium leading-tight rounded-full p-2 px-3 h-8 hover:bg-gray-100 duration-200 ease-out whitespace-nowrap">
          Become a Host
        </div>
        <TbWorld className="text-black w-5 h-5 relative" />
        <div className="pl-4 pr-2 py-2 bg-white rounded-[100px] border border-gray-200 justify-start items-center gap-2 flex">
          <FiMenu className={"text-black w-5 h-5 relative"} />
          <div className="w-8 h-8 justify-center items-center flex">
            <div className="w-8 h-8 bg-gray-100 rounded-full justify-center items-center inline-flex">
              <div className="w-8 h-8 relative">
                <Image
                  src={"/avatar-icon.svg"}
                  alt="avatar icon"
                  height={32}
                  width={32}
                  className="w-8 h-8 left-0 top-0 absolute bg-gray-100 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

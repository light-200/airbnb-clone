"use client";
import Search from "@/components/nav/search";
import { Nav } from "@/components/nav/nav";
import { Filters } from "@/components/nav/filter";
import { PriceMarker } from "@/components/priceMarker";
import { Listing } from "@/components/listing";
import { ListingsMap } from "@/components/map";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [listings, setListings] = useState([]);
  const navRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef(null);
  let navHeight: number;
  let lastPost = 0;

  let getListings = async () => {
    let query = `?skip=${lastPost}&limit=8`;
    let res = await fetch("https://dummyjson.com/products" + query);
    let data = await res.json();

    setListings((pl) => pl.concat(data.products));
    lastPost++;
  };

  useEffect(() => {
    getNavHeight();
  }, []);

  let getNavHeight = () => {
    navHeight = navRef.current!!.getBoundingClientRect().height;
    mapRef.current!!.style.setProperty("--nav-height", navHeight.toString());
  };

  let interSectionCallback = (entries: any) => {
    const [entry] = entries;
    if (entry.isIntersecting) getListings();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(interSectionCallback);
    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [loaderRef]);

  return (
    <main className="flex min-h-screen flex-col h-screen relative">
      <div
        ref={navRef}
        className="w-full bg-white  border border-gray-200 shadow-inner flex-col justify-start items-start flex sticky top-0 z-10"
      >
        <Nav>
          <Search />
        </Nav>
        <Filters />
      </div>
      <div className="flex h-full">
        <div className="flex flex-col gap-6 p-2 sm:p-6 overflow-y-auto w-[840px] flex-1 no-scrollbar">
          <div className="self-stretch text-black font-semibold text-sm leading-normal">
            200+ stays in Bordeaux
          </div>
          <div className="grid grid-cols-2  lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-6 w-full">
            {listings.map(
              ({ description, title, thumbnail, price, id }): any => (
                <Listing
                  description={description}
                  title={title}
                  imageUrl={thumbnail}
                  price={price}
                  key={id}
                />
              )
            )}
            <span ref={loaderRef}></span>
          </div>
        </div>
        <div className={"hidden lg:flex flex-1 justify-center relative"}>
          <div
            ref={mapRef}
            className={
              "grid overflow-hidden w-full items-center shadow-inner sticky h-[80vh]" +
              `top-[var(--nav-height)]`
            }
          >
            <ListingsMap />
          </div>
          <div className=" w-[217px] h-[402px] left-[186px] top-[89px] absolute">
            <div className="w-[52px] h-7 left-[84px] top-[311px] absolute justify-start items-start inline-flex">
              <PriceMarker price={"$200"} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

"use client";
import Search from "@/components/nav/search";
import { Nav } from "@/components/nav/nav";
import { Filters } from "@/components/nav/filter";
import { Listing } from "@/components/listing";
import { ListingsMap } from "@/components/map";
import { useEffect, useRef, useState } from "react";
import { ListingSkeletons } from "@/components/listingSkeleton";
import { LISTINGS } from "@/utility";
import { ListingType } from "@/types/data";

export default function Home() {
  const [listings, setListings] = useState<Array<ListingType>>([]);
  const [loading, setLoading] = useState(true);
  const navRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef(null);
  let mapHeight: number;
  let navHeight: number;
  let lastPost = 0;

  let getListings = async () => {
    if (lastPost > 1) return;
    let data1: Array<ListingType> = LISTINGS;

    // const query = `?skip=${lastPost}&limit=8`;
    // const url = "https://dummyjson.com/products";

    // let res = await fetch(url + query);
    // let data = await res.json();
    setLoading(false);
    setListings((pl) => pl.concat(data1));
    lastPost++;
  };

  useEffect(() => {
    getNavHeight();
    getListings();
  }, []);

  let getNavHeight = () => {
    let navHeight = navRef.current!!.getBoundingClientRect().height;
    mapHeight = window.innerHeight - navHeight;
    mapRef.current!!.style.setProperty(
      "--map-height",
      mapHeight.toFixed(0) + "px"
    );
    mapRef.current!!.style.setProperty(
      "--nav-height",
      navHeight.toFixed(0) + "px"
    );
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
    <main ref={mapRef} className="flex min-h-screen flex-col h-screen relative">
      <div
        ref={navRef}
        className="w-full bg-white  border border-gray-200 shadow-inner flex-col justify-start items-start flex fixed top-0 z-10"
      >
        <Nav>
          <Search />
        </Nav>
        <Filters />
      </div>
      <div className="flex h-[200vh] mt-[var(--nav-height)]">
        <div className="flex flex-col gap-6 p-2 sm:p-6 overflow-y-auto w-[840px] flex-1 no-scrollbar">
          <div className="self-stretch text-black font-semibold text-sm leading-normal">
            200+ stays in Bordeaux
          </div>
          <div className="grid grid-cols-2  lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-6 w-full">
            {loading && <ListingSkeletons listings={8} />}
            {listings.map(({ description, title, img, price }, i): any => (
              <Listing
                description={description}
                title={title}
                imageUrl={img}
                price={price}
                key={i}
              />
            ))}
            <span ref={loaderRef}></span>
          </div>
        </div>
        <div className={"hidden lg:flex flex-1 justify-center"}>
          <div
            className={
              "top-[var(--nav-height)] sticky bg-gray-500 h-[var(--map-height)] w-full"
            }
          >
            <ListingsMap listings={listings} />
          </div>
        </div>
      </div>
    </main>
  );
}

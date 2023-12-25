"use client";

import { useEffect, useRef } from "react";

export function ListingsMap() {
  const mapContainer = useRef(null);

  return (
    <img
      width={600}
      height={652}
      className="absolute w-full h-full aspect-auto"
      src="https://via.placeholder.com/600x652"
    />
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Map, { ViewState } from "react-map-gl";

const accessToken =
  "pk.eyJ1IjoibGlnaHQyMDAiLCJhIjoiY2xxbDB3aGttMXRsMzJrbzRpNHNvemd4MSJ9.8pvaeuXiS4WH2MAoLwarDA";

export function ListingsMap() {
  const mapRef = useRef(null);
  const [viewport, setViewport] = useState({
    latitude: 43,
    longitude: -79,
    zoom: 10,
  });

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_ACCESS_TOKEN}
      reuseMaps
      {...viewport}
      onMove={(evt) => setViewport(evt.viewState)}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    />
  );
}

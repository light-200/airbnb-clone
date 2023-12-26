"use client";

import { getCenter } from "geolib";
import { useEffect, useMemo, useRef, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { PriceMarker } from "./priceMarker";
import { ListingType } from "@/types/data";

export function ListingsMap({ listings }: { listings: Array<ListingType> }) {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 11,
  });

  const [selectedLocation, setSelectedLocation] = useState<ListingType | null>(
    null
  );

  const coordinates: any = useMemo(
    () =>
      listings.map((listing) => ({
        longitude: listing.long,
        latitude: listing.lat,
      })),
    [listings]
  );

  console.log(selectedLocation);

  useEffect(() => {
    if (coordinates.length > 0) {
      const center: any = getCenter(coordinates);
      setViewport((prevViewport) => ({
        ...prevViewport,
        latitude: center && center.latitude,
        longitude: center && center.longitude,
      }));
    }
  }, [coordinates]);

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_ACCESS_TOKEN}
      reuseMaps
      {...viewport}
      onMove={(evt) => setViewport(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      {listings.map((listing: ListingType, i: number) => (
        <div key={listing.long.toString() + listing.lat.toString() + i}>
          <Marker
            longitude={listing.long}
            latitude={listing.lat}
            anchor="bottom"
          >
            <span onClick={() => setSelectedLocation(listing)}>
              <PriceMarker price={listing.price} />
            </span>
          </Marker>
        </div>
      ))}
      {selectedLocation ? (
        <Popup
          longitude={selectedLocation.long}
          latitude={selectedLocation.lat}
          closeOnClick={false}
          anchor="top"
          onClose={() => setSelectedLocation(null)}
        >
          <div>{selectedLocation.title}</div>
          <img width="100%" src={selectedLocation.img.toString()} />
        </Popup>
      ) : null}
    </Map>
  );
}

import React, { FC, useState, useEffect } from "react";
import { Canvas } from "../Canvas";
import { Logo } from "../Logo";
import { Heading } from "../Heading";
import { Subheading } from "../Subheading";
import products from "../../data/products.json";
import { Locator } from "../Locator";
import stores from "../../data/stores.json";
import { geolocated, geoPropTypes, GeolocatedProps } from "react-geolocated";

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}

function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

const ProductsBase: FC<GeolocatedProps> = (args) => {
  const { isGeolocationAvailable, isGeolocationEnabled, coords } = args;
  const [isOpen, setIsOpen] = useState(false);
  const [productId, setProductId] = useState("");
  const [storesWithDistance, setStoresWithDistance] = useState(stores);

  useEffect(() => {
    if (coords && stores.length) {
      console.log("re-calculating distances");
      const storesWithDist = stores.map((s) => ({
        ...s,
        dist: getDistanceFromLatLonInKm(
          s.lat,
          s.lon,
          coords.latitude,
          coords.longitude
        ),
      }));
      setStoresWithDistance(storesWithDist);
    }
  }, [coords, stores]);

  console.log("isGeolocationAvailable", isGeolocationAvailable);
  console.log("isGeolocationEnabled", isGeolocationEnabled);
  console.log("coords", coords);

  return (
    <Canvas
      css={{
        maxWidth: "980px",
        verticalAlign: "middle",
      }}
    >
      <Locator
        isOpen={isOpen}
        productId={productId}
        stores={storesWithDistance}
        close={() => setIsOpen(false)}
      />
      <Logo />
      <Heading>FRESH FROM THE FARM</Heading>
      <Subheading>Click on an image to find a store</Subheading>
      <div
        css={{
          display: "grid",
          alignItems: "center",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gridGap: "1rem",
        }}
      >
        {products.slice(0, 9).map((p) => (
          <figure key={p.id}>
            <img
              src={require(`../../img/${p.images[0]}`)}
              alt={p.name}
              css={{
                cursor: "pointer",
                verticalAlign: "middle",
                borderStyle: "none",
                width: "100%",
              }}
              onClick={() => {
                setProductId(p.id);
                setIsOpen(true);
              }}
            />
            <figcaption>{p.name}</figcaption>
          </figure>
        ))}
      </div>
    </Canvas>
  );
};

export const Products = geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
  suppressLocationOnMount: false,
  watchPosition: true,
})(ProductsBase);

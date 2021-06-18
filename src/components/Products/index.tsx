import React, { FC, useState, useRef, useEffect } from "react";
import { Canvas } from "../Canvas";
import { Logo } from "../Logo";
import { Heading } from "../Heading";
import { Subheading } from "../Subheading";
import products from "../../data/products.json";
import { Locator } from "../Locator";
import stores from "../../data/stores.json";
import { geolocated, geoPropTypes, GeolocatedProps } from "react-geolocated";

const chunk = (arr: Array<any>, size: number): Array<Array<any>> =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

const storeChunks = chunk(stores, 42);

const ProductsBase: FC<GeolocatedProps> = (args) => {
  const { isGeolocationAvailable, isGeolocationEnabled, coords } = args;
  const [isOpen, setIsOpen] = useState(false);
  const [productId, setProductId] = useState("");
  const [storesWithDistance, setStoresWithDistance] = useState(stores);

  useEffect(() => {
    if (coords && stores.length) {
      console.log("re-calculating distances");
      let swd: Array<any> = [];
      let responses: Array<Promise<any>> = [];
      storeChunks.forEach(async (c) => {
        const storeCoords = c.map((s) => `${s.lon},${s.lat}`).join(";");
        responses.push(
          fetch(
            `https://router.project-osrm.org/table/v1/driving/${coords.longitude},${coords.latitude};${storeCoords}?sources=0&annotations=distance`
          )
            .then((response) => response.json())
            .then((data) => {
              const zipped = data.distances[0]
                .slice(1, data.distances[0].length)
                .map((d: any, i: number) => ({ ...c[i], dist: d }));
              swd = [...swd, ...zipped];
              setStoresWithDistance(swd);
            })
        );
      });
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

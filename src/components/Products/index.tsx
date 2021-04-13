import React, { FC, useState, useRef } from "react";
import { Canvas } from "../Canvas";
import { Logo } from "../Logo";
import { Heading } from "../Heading";
import { Subheading } from "../Subheading";
import products from "../../data/products.json";
import Locator from "../Locator";
import stores from "../../data/stores.json";

const chunk = (arr: Array<any>, size: number): Array<Array<any>> =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

const storeChunks = chunk(stores, 42);

export const Products: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productId, setProductId] = useState("");
  const [storesWithDistance, setStoresWithDistance] = useState(stores);
  const locatorRef = useRef(null);

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
        getLocation={
          locatorRef?.current
            ? (locatorRef?.current as any).getLocation
            : () => {
                console.log("here");
              }
        }
        ref={locatorRef}
        calcDist={async (coords) => {
          console.log("TM: calculating store distances");
          // TODO: show spinner

          let swd: Array<any> = [];
          let responses: Array<Promise<any>> = [];

          storeChunks.forEach(async (c) => {
            const storeCoords = c.map((s) => `${s.lon},${s.lat}`).join(";");
            responses.push(
              fetch(
                `http://router.project-osrm.org/table/v1/driving/${coords.longitude},${coords.latitude};${storeCoords}?sources=0&annotations=distance`
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

          await Promise.all(responses);
          console.log("TODO: hide spinner");
        }}
      />
      <Logo />
      <Heading>FRESH FROM THE FARM</Heading>
      <Subheading>Click on an image for store locations</Subheading>
      <div
        css={{
          display: "grid",
          alignItems: "center",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gridGap: "1rem",
        }}
      >
        {products.slice(0, 8).map((p) => (
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
        ))}
      </div>

      <div css={{ height: "100px", position: "relative" }}>
        <div
          css={{
            margin: "0",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <button
            css={{
              color: "#000 !important",
              backgroundColor: "#f4f1f1 !important",
              padding: "12px 24px !important",
              userSelect: "none",
              border: "none",
              textDecoration: "none",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            LOAD MORE
          </button>
        </div>
      </div>
    </Canvas>
  );
};

import React, { FC, useState, useEffect, useRef } from "react";
import { Canvas } from "../Canvas";
import { Logo } from "../Logo";
import { Heading } from "../Heading";
import { Subheading } from "../Subheading";
import products from "../../data/products.json";
import { Locator } from "../Locator";
import stores from "../../data/stores.json";

export const Products: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productId, setProductId] = useState("");
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
        stores={stores}
        close={() => setIsOpen(false)}
        getLocation={
          locatorRef?.current
            ? (locatorRef?.current as any).getLocation
            : () => {
                console.log("here, can't getLocation");
              }
        }
        ref={locatorRef}
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

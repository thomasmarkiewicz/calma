import React, { FC, useRef, useState } from "react";
import { Text } from "../Text";
import { Canvas } from "../Canvas";
import { Heading } from "../Heading";
import { Subheading } from "../Subheading";
import { Locator } from "../Locator";
import stores from "../../data/stores.json";

const alphabeticalStores = stores.sort((a: { name: string }, b: { name: string }) =>
  a.name > b.name ? 1 : -1
);

export const Stores: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locatorRef = useRef(null);
  return (
    <Canvas
      css={{
        maxWidth: "980px",
      }}
    >
      <div css={{ position: "relative", top: "-60px" }} id="about"></div>
      <Heading>STORE LOCATIONS</Heading>
      <Subheading>Hundred's of Stores in Chicago Metro Area</Subheading>

      <p>
        <Text>
          Calma Foods is Chicagoland's food distribution company of Amish and
          all-natural products. We distribute our products to hundred's of
          stores in and around Chicagoland area.
        </Text>
      </p>

      <button
        onClick={() => {
            setIsOpen(true);
        }}
        css={{
          color: "#000 !important",
          backgroundColor: "#14e631 !important",
          //backgroundColor: "#f4f1f1 !important",
          padding: "12px 24px !important",
          userSelect: "none",
          border: "none",
          textDecoration: "none",
          textAlign: "center",
          cursor: "pointer",
          width: "98%",
          fontWeight: "bold",
          borderRadius: "8px",
        }}
      >
        FIND A STORE
      </button>

      <Locator
        isOpen={isOpen}
        stores={alphabeticalStores}
        close={() => setIsOpen(false)}
        getLocation={
          locatorRef?.current
            ? (locatorRef?.current as any).getLocation
            : () => {
                console.log("can't getLocation");
              }
        }
        ref={locatorRef}
      />
    </Canvas>
  );
};

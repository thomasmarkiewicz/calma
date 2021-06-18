import React, { FC, useRef, useEffect } from "react";
import Modal from "react-modal";
import products from "../../data/products.json";
import { geolocated, geoPropTypes, GeolocatedProps } from "react-geolocated";

// https://www.myprogrammingtutorials.com/find-distance-between-two-addresses-google-api-php.html
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
// https://www.npmjs.com/package/react-geolocated

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface Props {
  productId: string;
  isOpen: boolean;
  close: () => void;
  stores: any;
}

export const Locator: FC<Props> = (args) => {
  const { productId, isOpen, close, stores } = args;

  let product = null;
  let storesWithProduct = null;
  let storeList = null;

  if (isOpen) {
    product = products.find((p) => p.id === productId);
    storesWithProduct = stores
      .filter((s: any) => s.products.includes(productId))
      .sort((a: { dist: number }, b: { dist: number }) =>
        a.dist > b.dist ? 1 : -1
      );
    storeList = storesWithProduct.map((swp: any) => (
      <p key={swp.id}>
        <a
          href={`https://maps.google.com/?q=${swp.name}, ${swp.zip}`}
          target="_blank"
        >
          {swp.name} - {swp.city}, {swp.state} ({swp.dist || "n/a"})
        </a>
      </p>
    ));
  }
  
  const src = product?.images[0] ? require(`../../img/${product?.images[0]}`) : undefined;

  return (
    <div>
      <Modal
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        contentLabel="Product Locator"
      >
        <h2>{product?.name}</h2>

        <img
          src={src}
          alt={product?.name}
          css={{
            cursor: "pointer",
            verticalAlign: "middle",
            borderStyle: "none",
            height: "200px",
          }}
        />

        {storeList}

        <button
          onClick={close}
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
          Close
        </button>
      </Modal>
    </div>
  );
};

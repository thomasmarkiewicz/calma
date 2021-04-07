import React, { FC, useRef } from "react";
import Modal from "react-modal";
import products from "../../data/products.json";
import stores from "../../data/stores.json";
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

interface Props extends GeolocatedProps {
  productId: string;
  isOpen: boolean;
  close: () => void;
  getLocation: () => void;
}

const Locator: FC<Props> = (args) => {
  const {
    productId,
    isOpen,
    close,
    isGeolocationAvailable,
    isGeolocationEnabled,
    getLocation,
    coords,
  } = args;

  let product = null;
  let storesWithProduct = null;
  let storeList = null;

  if (isOpen) {
    console.log("isGeolocationAvailable", isGeolocationAvailable);
    console.log("isGeolocationEnabled", isGeolocationEnabled);

    product = products.find((p) => p.id === productId);
    storesWithProduct = stores.filter((s) => s.products.includes(productId));
    storeList = storesWithProduct.map((swp) => (
      <p key={swp.id}>
        <a
          href={`https://maps.google.com/?q=${swp.name}, ${swp.zip}`}
          target="_blank"
        >
          {swp.name} - {swp.city}, {swp.state}
        </a>
      </p>
    ));
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        contentLabel="Product Locator"
      >
        <h2>{product?.name}</h2>

        <button
          onClick={() => {
            if (isGeolocationAvailable && !isGeolocationEnabled) {
              getLocation();
            }
            getLocation();
            console.log('coords', coords);
          }}
        >
          Sort stores
        </button>

        <p>Your location: {coords?.latitude}, {coords?.longitude}</p>

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

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
  suppressLocationOnMount: true,
})(Locator);

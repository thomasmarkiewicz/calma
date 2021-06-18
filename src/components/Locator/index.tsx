import React, { FC, useEffect, useState } from "react";
import Modal from "react-modal";
import products from "../../data/products.json";
import { geolocated, GeolocatedProps } from "react-geolocated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

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

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}

function getDistanceFromLatLonInKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
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

interface Props extends GeolocatedProps {
  productId: string;
  isOpen: boolean;
  close: () => void;
  stores: any;
  getLocation: () => void;
}

export const LocatorBase: FC<Props> = (args) => {
  const {
    productId,
    isOpen,
    close,
    stores,
    getLocation,
    coords,
    isGeolocationAvailable,
    isGeolocationEnabled,
  } = args;
  const [storesWithDistance, setStoresWithDistance] = useState(stores);
  const [storeList, setStoreList] = useState(null);

  useEffect(() => {
    setStoresWithDistance(stores);
  }, [stores]);

  useEffect(() => {
    if (coords) {
      const storesWithDist = stores.map((s: any) => ({
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
  }, [coords]);

  useEffect(() => {
    const storesWithProduct = storesWithDistance
      .filter((s: any) => s.products.includes(productId))
      .sort((a: { dist: number }, b: { dist: number }) =>
        a.dist >= b.dist ? 1 : -1
      );

    const storeList = storesWithProduct.map((swp: any) => (
      <p key={swp.id}>
        <a
          href={`https://maps.google.com/?q=${swp.name}, ${swp.zip}`}
          target="_blank"
        >
          {swp.name} - {swp.city}, {swp.state}
        </a>
      </p>
    ));
    setStoreList(storeList);
  }, [storesWithDistance, productId]);

  const locationButton = (): any =>
    !coords && isGeolocationAvailable /* && !isGeolocationEnabled */ ? (
      <div>
        <button
          onClick={() => {
            getLocation();
          }}
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
          Sort by your current location
        </button>
        <p>Stores in alphabetical order:</p>
      </div>
    ) : (
      <p>Stores nearest your current location:</p>
    );

  const product = products.find((p) => p.id === productId);

  const src = product?.images[0]
    ? require(`../../img/${product?.images[0]}`)
    : undefined;

  return (
    <div>
      <Modal
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        contentLabel="Product Locator"
      >
        <div
          css={{
            width: "100%",
            display: "inline-block",
            overflow: "auto",
            whiteSpace: "nowrap",
            margin: "0px auto",
          }}
        >
          <div css={{ float: "left" }}>
            <h2>{product?.name}</h2>
          </div>
          <div css={{ float: "right" }}>
            <FontAwesomeIcon
              icon={faWindowClose}
              css={{
                fontSize: "1.8em",
                verticalAlign: "middle",
                cursor: "pointer",
              }}
              onClick={close}
            />
          </div>
        </div>

        <img
          src={src}
          alt={product?.name}
          css={{
            verticalAlign: "middle",
            borderStyle: "none",
            height: "200px",
            marginBottom: "16px",
          }}
        />

        <br />

        {locationButton()}

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

export const Locator = geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
  suppressLocationOnMount: true,
})(LocatorBase);

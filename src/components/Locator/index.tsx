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

function getDistanceFromLatLonInMiles(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const distInKm = getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2);
  return Math.round(distInKm * 0.621371);
}

interface Props extends GeolocatedProps {
  productId?: string | null | undefined;
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
        dist: getDistanceFromLatLonInMiles(
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
      .filter((s: any) => (productId ? s.products.includes(productId) : s))
      .sort((a: { dist: number }, b: { dist: number }) =>
        a.dist < b.dist ? 1 : -1
      );

    const storeList = storesWithProduct
      .map((swp: any) => (
        <p
          key={swp.id}
          css={{
            margin: 0,
            padding: "16px 0px",
            borderBottom: "1px solid lightgrey",
            width: "96%",
            "a:link": {
              color: "gray",
              textDecoration: "none",
            },
            "a:visited": {
              color: "gray",
            },
            ":hover": {
              color: "#000 !important",
              backgroundColor: "#eee!important",
            },
          }}
          onClick={() =>
            window.open(
              `https://maps.google.com/?q=${swp.name}, ${swp.zip}`,
              "_blank"
            )
          }
        >
          <a
            href={`https://maps.google.com/?q=${swp.name}, ${swp.zip}`}
            target="_blank"
          >
            <div
              css={{
                fontWeight: "bold",
                fontSize: "larger",
                paddingBottom: "8px",
              }}
            >
              {swp.name}
            </div>
            <div>{swp.street}</div>
            <div>
              {swp.city}, {swp.state} {swp.zip}
            </div>
            <div>{swp.phone}</div>
            {swp.dist && <div css={{ marginTop: "4px" }}>{swp.dist} miles</div>}
          </a>
        </p>
      ))
      .reverse();
    setStoreList(storeList);
  }, [storesWithDistance, productId]);

  const locationButton = (): any =>
    !coords && isGeolocationAvailable && isGeolocationEnabled ? (
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
            width: "98%",
            fontWeight: "bold",
            borderRadius: "8px",
          }}
        >
          Use my location to find nearest stores
        </button>
        <p>Stores in alphabetical order:</p>
      </div>
    ) : (
      <p>Nearest stores:</p>
    );

  const product = products.find((p) => p.id === productId);

  const src = product?.images[0]
    ? require(`../../img/${product?.images[0]}`)
    : undefined;

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Product Locator"
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      onRequestClose={close}
      style={{
        overlay: {
          opacity: 1,
          zIndex: 99,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(46,46,51,.95)",
        },
        content: {
          // top: "50%",
          // left: "50%",
          // right: "0%",
          // bottom: "-40%",
          // marginRight: "-50%",
          // transform: "translate(-50%, -50%)",
          // maxWidth: "600px",
          zIndex: 100,
          position: "fixed",
          top: 8,
          left: 0,
          right: 0,
          width: "auto",
          maxWidth: "500px",
          margin: "0 auto",
          height: "calc(var(--vh, 1vh) * 95)",
        },
      }}
    >
      <div
        css={{
          position: "relative",
          margin: "0 auto",
          borderRadius: "12px 12px 0 0",
          height: "calc(var(--vh, 1vh) * 95)",
        }}
      >
        <div
          css={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            overflow: "auto",
            height: "calc(var(--vh, 1vh) * 95)",
          }}
        >
          <div css={{ textAlign: "center" }}>
            {productId && <h2>{product?.name}</h2>}
            {!productId && <h2>Stores</h2>}

            {productId && (
              <img
                src={src}
                alt={product?.name}
                css={{
                  borderStyle: "1px solid grey",
                  borderRadius: "8px",
                  height: "200px",
                  marginBottom: "16px",
                }}
              />
            )}

            {locationButton()}
          </div>

          {storeList}
        </div>

        <div
          css={{
            position: "absolute",
            left: "auto",
            right: "8px",
            bottom: "8px",
          }}
        >
          <button
            onClick={close}
            css={{
              color: "#000 !important",
              backgroundColor: "#14e631 !important",
              padding: "16px 24px !important",
              userSelect: "none",
              border: "none",
              borderRadius: "8px",
              textDecoration: "none",
              textAlign: "center",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            CLOSE
          </button>
        </div>
      </div>
    </Modal>
  );
};

export const Locator = geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
  suppressLocationOnMount: true,
})(LocatorBase);

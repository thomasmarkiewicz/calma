import React, { FC, HTMLProps } from "react";
import { useTheme } from "emotion-theming";
import { Theme } from "../../app/Theme";
import { CSSObject } from "@emotion/core";

export const Navbar: FC = () => {
  const theme = useTheme<Theme>();

  const itemStyles: CSSObject = {
    padding: "8px 8px",
    //float: 'left',
    //width: 'auto',
    border: "none",
    display: "inline",
    outline: 0,
    width: "100%",
    textAlign: "center",
    whiteSpace: "nowrap",
    float: "none", // "left"

    verticalAlign: "middle",
    overflow: "hidden",
    textDecoration: "none",
    color: "grey",
    backgroundColor: "inherit",
    cursor: "pointer",

    ":hover": {
      color: "#000 !important",
      backgroundColor: "#f8fdfb!important",
    },

    ":disabled": {
      cursor: "not-allowed",
      opacity: "0.3",
      pointerEvents: "none",
    },
  };

  return (
    <div id="home"
      css={{
        position: "fixed",
        width: "100%",
        zIndex: 1,
        top: 0,
      }}
    >
      { /* .w3-bar */ }
      <div
        css={{
          padding: "8px 8px",
          float: "left",
          width: "100%",
          overflow: "hidden",
          border: "none",
          display: "block",
          outline: 0,
          position: "static",
          whiteSpace: "normal",
          backgroundColor: "#dbedfc !important",
          opacity: ".95"
        }}
      >
        {/* home */}
        <a href="#home" css={itemStyles}>
          HOME
        </a>

        {/* about */}
        <a href="#about" css={itemStyles}>
          ABOUT
        </a>

        {/* products */}
        <a href="#products" css={itemStyles}>
          PRODUCTS
        </a>

        {/* contact */}
        <a href="#contact" css={itemStyles}>
          CONTACT
        </a>


      </div>
    </div>
  );
};

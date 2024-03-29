import React, { FC } from "react";
import { Canvas } from "../Canvas";
import { Heading } from "../Heading";
import { Subheading } from "../Subheading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export const Contact: FC = () => {
  return (
    <Canvas
      css={{
        maxWidth: "980px",
      }}
    >
      <Heading>FEEDBACK</Heading>
      <Subheading>Want to sell or supply our products?</Subheading>
      <Subheading>We'd love to hear from you!</Subheading>

      <Subheading>
        <FontAwesomeIcon
          fixedWidth
          icon={faEnvelope as any}
          css={{ fontSize: "1.5em", verticalAlign: "middle" }}
        />
        &nbsp;&nbsp;<a css={{color: "inherit"}} href="mailto:info@calmaoptimal.com">info@calmaoptimal.com</a>
      </Subheading>
      <Subheading>Follow us on 
        <a css={{color: "inherit"}} href="https://www.facebook.com/Calma-Optimal-Food-ltd-111489320792/"> Facebook </a>
        and 
        <a css={{color: "inherit"}}  href="https://twitter.com/Calmaoptimal?s=01"> Twitter</a>
      </Subheading>
    </Canvas>
  );
};

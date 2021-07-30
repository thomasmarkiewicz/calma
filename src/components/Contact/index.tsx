import React, { FC } from "react";
import { Text } from "../Text";
import { Canvas } from "../Canvas";
import { Heading } from "../Heading";
import { Subheading } from "../Subheading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
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
          icon={faEnvelope}
          css={{ fontSize: "1.5em", verticalAlign: "middle" }}
        />
        &nbsp;&nbsp;<a css={{color: "inherit"}} href="mailto:info@calmaoptimal.com">info@calmaoptimal.com</a>
      </Subheading>
    </Canvas>
  );
};

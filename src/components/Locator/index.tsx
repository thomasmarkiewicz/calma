import React, { FC } from "react";
import Modal from "react-modal";

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
}

export const Locator: FC<Props> = (args) => {
  const { productId, isOpen, close } = args;
  return (
    <Modal isOpen={isOpen} style={customStyles} contentLabel="Product Locator">
      <h2>Hello</h2>
      <div>I am a modal for {productId}</div>
      <button onClick={close}>Close</button>
    </Modal>
  );
};

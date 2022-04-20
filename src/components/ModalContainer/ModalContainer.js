import React from "react";
import "./ModalContainer.scss";
import { Modal } from "@material-ui/core";

export default function ModalContainer({ isOpenModal, closeModal, children }) {
  return (
    <div>
      <Modal
        className="modal"
        open={isOpenModal}
        onClose={closeModal}
        closeAfterTransition
      >
        <div>{children}</div>
      </Modal>
    </div>
  );
}

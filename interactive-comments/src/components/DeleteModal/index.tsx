import { useState } from "react";
import styles from "./styles.module.scss";
import Modal from "react-modal";

interface DeleteModalProps {
  // Arrumar esse Boolean
  modalIsOpen: boolean; 
  closeModal: () => void;
  onDelete: () => void;
}

export function DeleteModal({ modalIsOpen, closeModal, onDelete }: DeleteModalProps) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <div className={styles.container}>
        <h1>Delete comment</h1>
        <p>Are you sure want to delete this comment? This will remove the comment and cant be undone.</p>
        <div>
          <button className={styles.cancel} onClick={closeModal}>NO, CANCEL</button>
          <button className={styles.delete} onClick={onDelete}>YES, DELETE</button>
        </div>
      </div>
    </Modal>
  );
}
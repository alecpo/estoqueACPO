import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

interface IProps {
  isOpen: boolean;
  toggle: () => void;
  title: string;
  desc: string;
  confirmLabel: string;
  cancelLabel: string;
  handleConfirm: () => void;
  closeModal: () => void;
}

export default ({
  isOpen,
  title,
  desc,
  confirmLabel,
  cancelLabel,
  toggle,
  handleConfirm,
  closeModal,
}: IProps) => (
  <Modal isOpen={isOpen} toggle={toggle}>
    <ModalHeader toggle={toggle}>{title}</ModalHeader>
    <ModalBody>{desc}</ModalBody>
    <ModalFooter>
      <Button color='danger' onClick={handleConfirm}>
        {confirmLabel}
      </Button>
      <Button color='secondary' onClick={closeModal}>
        {cancelLabel}
      </Button>
    </ModalFooter>
  </Modal>
);

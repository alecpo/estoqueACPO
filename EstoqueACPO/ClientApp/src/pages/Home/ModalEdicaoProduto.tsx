import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import CadastrarEditarProdutoForm from '../../components/CadastrarEditarProdutoForm';
import IProduto from '../../genericInterfaces/IProduto';

interface IProps {
  isOpen: boolean;
  title: string;
  confirmLabel: string;
  cancelLabel: string;
  initialValues: IProduto;
  toggle: () => void;
  handleConfirm: () => void;
  closeModal: () => void;
}

export default ({
  isOpen,
  title,
  confirmLabel,
  cancelLabel,
  initialValues,
  toggle,
  handleConfirm,
  closeModal,
}: IProps) => (
  <Modal isOpen={isOpen} toggle={toggle}>
    <ModalHeader toggle={toggle}>{title}</ModalHeader>
    <ModalBody>
      <CadastrarEditarProdutoForm isEdicao initialValues={initialValues} />
    </ModalBody>
    <ModalFooter>
      <Button color='primary' onClick={handleConfirm}>
        {confirmLabel}
      </Button>
      <Button color='secondary' onClick={closeModal}>
        {cancelLabel}
      </Button>
    </ModalFooter>
  </Modal>
);

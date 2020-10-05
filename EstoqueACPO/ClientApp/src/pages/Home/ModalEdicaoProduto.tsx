import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import CadastrarEditarProdutoForm from '../../components/CadastrarEditarProdutoForm';
import IProduto from '../../genericInterfaces/IProduto';

interface IProps {
  isOpen: boolean;
  title: string;
  initialValues: IProduto;
  toggle: () => void;
  closeModal: () => void;
}

export default ({ isOpen, title, initialValues, toggle, closeModal }: IProps) => (
  <Modal isOpen={isOpen} toggle={toggle}>
    <ModalHeader toggle={toggle}>{title}</ModalHeader>
    <ModalBody>
      <CadastrarEditarProdutoForm isEdicao initialValues={initialValues} closeModal={closeModal} />
    </ModalBody>
  </Modal>
);

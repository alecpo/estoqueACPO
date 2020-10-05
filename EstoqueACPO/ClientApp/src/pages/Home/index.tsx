import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { deleteProdutoRequest, getProdutosRequest } from '../../store/modules/produto/actions';
import { RootState } from '../../store/modules/rootReducer';
import ModalExclusao from '../../components/ModalExclusao';
import ModalEdicaoProduto from './ModalEdicaoProduto';
import IProduto from '../../genericInterfaces/IProduto';

interface IDeleteModalInfo {
  desc: string;
  idToRemove: number;
}

const Home = () => {
  const { produtos } = useSelector(({ produto }: RootState) => produto);

  //#region edicao
  const [isModalEdicaoOpen, setModalEdicaoOpen] = useState(false);
  const [initialValuesEdicao, setInitialValuesEdicao] = useState<IProduto>({} as IProduto);

  const toggleModalEdicao = () => setModalEdicaoOpen(!isModalEdicaoOpen);

  const closeModalEdicao = () => {
    setInitialValuesEdicao({} as IProduto);
    setModalEdicaoOpen(false);
  };
  //#endregion edicao

  //#region exclusao
  const [isModalExclusaoOpen, setModalExclusaoOpen] = useState(false);
  const [modalExclusaoInfo, setModalExclusaoInfo] = useState<IDeleteModalInfo>(
    {} as IDeleteModalInfo,
  );

  const dispatch = useDispatch();

  const toggleModalExclusao = () => setModalExclusaoOpen(!isModalExclusaoOpen);

  const handleExcluirProduto = () => {
    dispatch(deleteProdutoRequest(modalExclusaoInfo.idToRemove, closeModalExclusao));
  };

  const closeModalExclusao = () => {
    setModalExclusaoInfo({} as IDeleteModalInfo);
    setModalExclusaoOpen(false);
  };

  useEffect(() => {
    if (Boolean(modalExclusaoInfo.idToRemove)) setModalExclusaoOpen(true);
  }, [modalExclusaoInfo.idToRemove]);

  useEffect(() => {
    if (Boolean(initialValuesEdicao.id)) setModalEdicaoOpen(true);
  }, [initialValuesEdicao.id]);

  //#endregion exclusao

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>Código #</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Qnt em estoque</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map(produto => (
            <tr key={produto.id}>
              <th scope='row'>{produto.id}</th>
              <td>{produto.nome}</td>
              <td>
                R$
                {produto.valor.toFixed(2)}
              </td>
              <td>{produto.unidades}</td>
              <td align='center'>
                <Row>
                  <Col xs='4'>
                    <Button color='info' size='sm' onClick={() => setInitialValuesEdicao(produto)}>
                      Editar
                    </Button>
                  </Col>
                  <Col xs='4'>
                    <Button
                      color='danger'
                      size='sm'
                      onClick={() =>
                        setModalExclusaoInfo({
                          desc: produto.nome,
                          idToRemove: produto.id,
                        } as IDeleteModalInfo)
                      }
                    >
                      X
                    </Button>
                  </Col>
                </Row>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ModalExclusao
        toggle={toggleModalExclusao}
        cancelLabel='Cancelar'
        confirmLabel='Excluir'
        desc={`Tem certeza que deseja excluir o item: ${modalExclusaoInfo.desc} ?`}
        closeModal={closeModalExclusao}
        handleConfirm={handleExcluirProduto}
        isOpen={isModalExclusaoOpen}
        title='Atenção: Operação não poderá ser desfeita.'
      />
      <ModalEdicaoProduto
        toggle={toggleModalEdicao}
        cancelLabel='Cancelar'
        confirmLabel='Atualizar'
        initialValues={initialValuesEdicao}
        closeModal={closeModalEdicao}
        handleConfirm={() => {}}
        isOpen={isModalEdicaoOpen}
        title='Edição de produto'
      />
    </div>
  );
};

export default Home;

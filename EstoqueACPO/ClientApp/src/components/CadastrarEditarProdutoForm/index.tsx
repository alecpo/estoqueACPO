import React from 'react';
import { Button, Input, Label } from 'reactstrap';
import FormGroup from 'reactstrap/lib/FormGroup';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import IProduto from '../../genericInterfaces/IProduto';
import { useDispatch } from 'react-redux';
import { createProdutoRequest, updateProdutoRequest } from '../../store/modules/produto/actions';
import { useHistory } from 'react-router';

const REQUIRED_FIELD = 'Favor preencher o campo';

interface IProps {
  isEdicao?: boolean;
  initialValues?: IProduto;
  handleConfirm?: (produto: IProduto) => void;
  closeModal?: () => void;
}

const cadastroSchema = Yup.object().shape({
  nome: Yup.string().required(REQUIRED_FIELD),
  valor: Yup.string().required(REQUIRED_FIELD),
  unidades: Yup.string().required(REQUIRED_FIELD),
});

const AlterarEditarProdutoForm = ({ isEdicao, initialValues, closeModal }: IProps) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const cadastrarProduto = (produto: IProduto) => {
    dispatch(createProdutoRequest(produto, () => history.push('/')));
  };

  const atualizarProduto = (produto: IProduto) => {
    if (closeModal) dispatch(updateProdutoRequest(produto.id, produto, closeModal));
  };

  return (
    <Formik
      initialValues={initialValues || ({ nome: '', valor: 0.0, unidades: 0 } as IProduto)}
      validationSchema={cadastroSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={isEdicao ? atualizarProduto : cadastrarProduto}
    >
      {({ handleChange, values }) => (
        <Form translate=''>
          <FormGroup>
            <Label>Nome do produto</Label>
            <Field
              type='text'
              name='nome'
              id='nome'
              value={values.nome}
              placeholder='Insira o nome do produto'
              component={Input}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Valor do produto (R$)</Label>
            <Field
              type='number'
              name='valor'
              id='valor'
              value={values.valor}
              placeholder='Informe o valor da unidade'
              component={Input}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Quantidade em estoque</Label>
            <Field
              type='number'
              name='unidades'
              id='unidades'
              value={values.unidades}
              placeholder='Informe a quantidade em estoque'
              component={Input}
              onChange={handleChange}
            />
          </FormGroup>

          {!isEdicao ? (
            <Button id='btnSubmit' type='submit'>
              Cadastrar Produto
            </Button>
          ) : (
            <div className='modal-footer'>
              <Button color='primary' id='btnSubmit' type='submit'>
                Atualizar
              </Button>
              <Button color='secondary' onClick={closeModal}>
                Cancelar
              </Button>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default AlterarEditarProdutoForm;

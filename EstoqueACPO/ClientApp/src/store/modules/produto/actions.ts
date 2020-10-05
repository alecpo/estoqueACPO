import { action } from 'typesafe-actions';

import IProduto from '../../../genericInterfaces/IProduto';
import {
  GET_PRODUTOS_REQUEST,
  GET_PRODUTOS_SUCCESS,
  CREATE_PRODUTO_REQUEST,
  CREATE_PRODUTO_SUCCESS,
  UPDATE_PRODUTO_REQUEST,
  UPDATE_PRODUTO_SUCCESS,
  DELETE_PRODUTO_REQUEST,
  DELETE_PRODUTO_SUCCESS,
} from './actionTypes';

export const getProdutosRequest = () => action(GET_PRODUTOS_REQUEST, undefined);
export const getProdutosSuccess = (produtos: IProduto[]) => action(GET_PRODUTOS_SUCCESS, produtos);

export const createProdutoRequest = (produto: IProduto, redirectCallback: () => void) =>
  action(CREATE_PRODUTO_REQUEST, { produto, redirectCallback });
export const createProdutoSuccess = (produto: IProduto) => action(CREATE_PRODUTO_SUCCESS, produto);

export const deleteProdutoRequest = (id: number, deleteItemCallback: () => void) =>
  action(DELETE_PRODUTO_REQUEST, { id, deleteItemCallback });
export const deleteProdutoSuccess = (id: number) => action(DELETE_PRODUTO_SUCCESS, id);

export const updateProdutoRequest = (
  id: number,
  produto: IProduto,
  updateItemCallback: () => void,
) => action(UPDATE_PRODUTO_REQUEST, { id, produto, updateItemCallback });
export const updateProdutoSuccess = (produto: IProduto) => action(UPDATE_PRODUTO_SUCCESS, produto);

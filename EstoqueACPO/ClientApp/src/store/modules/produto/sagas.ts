/* eslint-disable no-console */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import IProduto from '../../../genericInterfaces/IProduto';
import { addProduto, deletarProduto, getAllProdutos } from '../../../services/produto';
import { startAction, stopAction } from '../ui/actions';
import {
  createProdutoRequest,
  createProdutoSuccess,
  deleteProdutoRequest,
  deleteProdutoSuccess,
  getProdutosRequest,
  getProdutosSuccess,
} from './actions';
import {
  CREATE_PRODUTO_REQUEST,
  GET_PRODUTOS_REQUEST,
  DELETE_PRODUTO_REQUEST,
} from './actionTypes';

export function* getProdutos({ type }: ActionType<typeof getProdutosRequest>) {
  try {
    yield put(startAction({ name: type }));
    const { data, status } = yield call(getAllProdutos);
    const produtos: IProduto[] = data;
    if (status === 200) yield put(getProdutosSuccess(produtos));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(stopAction(type));
  }
}

export function* createProduto({ type, payload }: ActionType<typeof createProdutoRequest>) {
  try {
    const { produto, redirectCallback } = payload;
    yield put(startAction({ name: type }));
    const { data, status } = yield call(addProduto, produto);
    const produtoWithID: IProduto = data;
    if (status === 200) {
      yield put(createProdutoSuccess(produtoWithID));
      redirectCallback();
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(stopAction(type));
  }
}

export function* deleteProduto({ type, payload }: ActionType<typeof deleteProdutoRequest>) {
  try {
    const { id, deleteItemCallback } = payload;
    yield put(startAction({ name: type }));
    const { status } = yield call(deletarProduto, id);
    if (status === 200) {
      yield put(deleteProdutoSuccess(id));
      deleteItemCallback();
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(stopAction(type));
  }
}

export default all([
  takeLatest(GET_PRODUTOS_REQUEST, getProdutos),
  takeLatest(CREATE_PRODUTO_REQUEST, createProduto),
  takeLatest(DELETE_PRODUTO_REQUEST, deleteProduto),
]);

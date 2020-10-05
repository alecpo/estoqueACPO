import IProduto from '../../../genericInterfaces/IProduto';
import {
  GET_PRODUTOS_SUCCESS,
  CREATE_PRODUTO_SUCCESS,
  DELETE_PRODUTO_SUCCESS,
  UPDATE_PRODUTO_SUCCESS,
} from './actionTypes';
import { IProdutoState, ProdutoAction } from './types';

const initialState: IProdutoState = {
  produtos: [] as IProduto[],
};

export default (state = initialState, action: ProdutoAction): IProdutoState => {
  switch (action.type) {
    case GET_PRODUTOS_SUCCESS:
      return {
        ...state,
        produtos: action.payload,
      };
    case CREATE_PRODUTO_SUCCESS:
      return {
        ...state,
        produtos: [...state.produtos, action.payload as IProduto],
      };
    case DELETE_PRODUTO_SUCCESS:
      return {
        ...state,
        produtos: [...state.produtos.filter(produto => produto.id !== (action.payload as number))],
      };
    case UPDATE_PRODUTO_SUCCESS:
      return {
        ...state,
        produtos: [
          ...state.produtos.map(produto =>
            produto.id !== (action.payload as IProduto).id ? produto : (action.payload as IProduto),
          ),
        ],
      };
    default:
      return state;
  }
};

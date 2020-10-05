import { createStore, applyMiddleware, Reducer, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { IProdutoState, ProdutoAction } from './modules/produto/types';
import { IUIState, UIAction } from './modules/ui/types';

export interface IStoreState {
  ui: IUIState;
  produto: IProdutoState;
}

export type StoreAction = UIAction | ProdutoAction;

export default (reducer: Reducer<IStoreState, StoreAction>, middlawares: Middleware[]) => {
  const enhancer = composeWithDevTools(applyMiddleware(...middlawares));

  return createStore(reducer, enhancer);
};

import { ActionType } from 'typesafe-actions';

import IProduto from '../../../genericInterfaces/IProduto';
import * as actions from './actions';

export type ProdutoAction = ActionType<typeof actions>;

export interface IProdutoState {
  readonly produtos: IProduto[];
}

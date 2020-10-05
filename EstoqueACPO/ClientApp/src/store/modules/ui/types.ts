import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export type UIAction = ActionType<typeof actions>;

export interface IAction {
  name: string;
  params?: unknown;
}

export interface IUIState {
  readonly loader: {
    actions: Array<IAction>;
    refreshing: Array<string>;
  };
}

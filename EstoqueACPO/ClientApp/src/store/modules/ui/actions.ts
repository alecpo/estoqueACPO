import { action } from 'typesafe-actions';

import {
  UI_START_ACTION,
  UI_STOP_ACTION,
  UI_REFRESH_ACTION_STOP,
  UI_REFRESH_ACTION_START,
} from './actionTypes';
import { IAction } from './types';

export const startAction = (payload: IAction) =>
  action(UI_START_ACTION, { name: payload.name, params: payload.params });

export const stopAction = (name: string) => action(UI_STOP_ACTION, name);

export const refreshActionStart = (refreshAction: string) => action(UI_REFRESH_ACTION_STOP, { refreshAction });

export const refreshActionStop = (refreshAction: string) => action(UI_REFRESH_ACTION_START, { refreshAction });

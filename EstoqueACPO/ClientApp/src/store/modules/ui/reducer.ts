import {
  UI_START_ACTION,
  UI_STOP_ACTION,
  UI_REFRESH_ACTION_STOP,
  UI_REFRESH_ACTION_START
} from './actionTypes';
import { IUIState, UIAction, IAction } from './types';

const initialState: IUIState = {
  loader: {
    actions: [],
    refreshing: []
  }
};

export default (
  state = initialState,
  { type, payload }: UIAction
): IUIState => {
  const { loader } = state;
  const { actions, refreshing } = loader;
  switch (type) {
    case UI_START_ACTION:
      return {
        ...state,
        loader: {
          ...loader,
          actions: [...actions, payload as IAction]
        }
      };
    case UI_STOP_ACTION:
      return {
        ...state,
        loader: {
          ...loader,
          actions: actions.filter(action => action.name !== (payload as string))
        }
      };
    case UI_REFRESH_ACTION_STOP:
      return {
        ...state,
        loader: {
          ...loader,
          refreshing: [...refreshing, payload as string]
        }
      };
    case UI_REFRESH_ACTION_START:
      return {
        ...state,
        loader: {
          ...loader,
          refreshing: refreshing.filter(
            refresh => refresh !== (payload as string)
          )
        }
      };
    default:
      return state;
  }
};

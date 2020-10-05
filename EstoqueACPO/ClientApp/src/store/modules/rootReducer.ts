import { combineReducers } from 'redux';

import { IStoreState, StoreAction } from '../createStore';
import produto from './produto/reducer';
import ui from './ui/reducer';

const combinedReducer = combineReducers({ produto, ui });

const rootReducer = (state: IStoreState | undefined, action: StoreAction) =>
  combinedReducer(state, action);

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

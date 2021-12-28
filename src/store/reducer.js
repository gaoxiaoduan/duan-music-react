import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducers } from '@/pages/discover/c-pages/recommend/store';
import { reducer as playerReducer } from '@/pages/player/store';

const cbReducers = combineReducers({
  recommend: recommendReducers,
  player: playerReducer,
});

export default cbReducers;

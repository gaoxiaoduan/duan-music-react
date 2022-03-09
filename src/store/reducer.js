import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducers } from '@/pages/discover/c-pages/recommend/store';
import { reducer as playerReducer } from '@/pages/player/store';
import { reducer as songsReducer } from '@/pages/discover/c-pages/songs/store';

const cbReducers = combineReducers({
  recommend: recommendReducers,
  player: playerReducer,
  songs: songsReducer,
});

export default cbReducers;

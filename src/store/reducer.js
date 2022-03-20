import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducers } from '@/pages/discover/c-pages/recommend/store';
import { reducer as playerReducer } from '@/pages/player/store';
import { reducer as songsReducer } from '@/pages/discover/c-pages/songs/store';
import { reducer as albumReducer } from '@/pages/discover/c-pages/album/store';

const cbReducers = combineReducers({
  recommend: recommendReducers, // 推荐模块
  player: playerReducer, // 播放模块
  songs: songsReducer, // 歌单模块
  album: albumReducer, // 新碟上架模块
});

export default cbReducers;

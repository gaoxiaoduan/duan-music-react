import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState = Map({
  hotAlbums: [], // 热门新碟
  allAlbums: [], // 全部新碟
});

export default (state = defaultState, active) => {
  switch (active.type) {
    case actionTypes.HOT_ALBUMS:
      return state.set('hotAlbums', active.hotAlbums);
    case actionTypes.ALL_ALBUMS:
      return state.set('allAlbums', active.allAlbums);
    default:
      return state;
  }
};

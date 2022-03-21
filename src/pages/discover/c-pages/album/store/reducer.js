import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState = Map({
  hotAlbums: [], // 热门新碟
  allAlbums: [], // 全部新碟
  allAlbumsTotal: 0, // 全部新碟 的总数
});

export default (state = defaultState, active) => {
  switch (active.type) {
    case actionTypes.HOT_ALBUMS:
      return state.set('hotAlbums', active.hotAlbums);
    case actionTypes.ALL_ALBUMS:
      return state.set('allAlbums', active.allAlbums);
    case actionTypes.ALL_ALBUMS_TOTAL:
      return state.set('allAlbumsTotal', active.allAlbumsTotal);
    default:
      return state;
  }
};

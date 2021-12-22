import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],

  upRankingList: [],
  newSongList: [],
  originList: [],
});

export default (state = defaultState, active) => {
  switch (active.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set('topBanners', active.banners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends', active.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set('newAlbums', active.newAlbums);

    case actionTypes.CHANGE_UP_RANKING_LIST:
      return state.set('upRankingList', active.upRankingList);
    case actionTypes.CHANGE_NEW_SONG_LIST:
      return state.set('newSongList', active.newSongList);
    case actionTypes.CHANGE_ORIGIN_LIST:
      return state.set('originList', active.originList);
    default:
      return state;
  }
};

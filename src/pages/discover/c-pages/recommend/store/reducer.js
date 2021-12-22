import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
});

export default (state = defaultState, active) => {
  switch (active.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set('topBanners', active.banners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends', active.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set('newAlbums', active.newAlbums);
    default:
      return state;
  }
};

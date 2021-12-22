import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
});

export default (state = defaultState, active) => {
  switch (active.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set('topBanners', active.banners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends', active.hotRecommends);
    default:
      return state;
  }
};

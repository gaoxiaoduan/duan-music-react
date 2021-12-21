import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState = Map({
  topBanners: [],
});

export default (state = defaultState, active) => {
  switch (active.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set('topBanners', active.banners);
    default:
      return state;
  }
};

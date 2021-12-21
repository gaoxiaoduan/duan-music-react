import * as actionTypes from './constants';

const defaultState = {
  topBanners: [],
};

export default (state = defaultState, active) => {
  switch (active.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return { ...state, topBanners: active.banners };
    default:
      return state;
  }
};

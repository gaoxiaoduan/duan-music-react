import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState = Map({
  featureList: [], // 云音乐特色榜
  mediaList: [], // 全球媒体榜
  currentRankingID: 19723756, // 当前选择榜单ID,默认为飙升榜ID
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_FEATURE_LIST:
      return state.set('featureList', action.featureList);
    case actionTypes.CHANGE_MEDIA_LIST:
      return state.set('mediaList', action.mediaList);
    case actionTypes.CHANGE_CURRENT_RANKING_ID:
      return state.set('currentRankingID', action.currentRankingID);
    default:
      return state;
  }
};

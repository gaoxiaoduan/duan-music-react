import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState = Map({
  featureList: [], // 云音乐特色榜
  mediaList: [], // 全球媒体榜
  currentRankingID: 19723756, // 当前选择榜单ID,默认为飙升榜ID
  currentRankingDetail: {}, // 当前榜单详细数据
  updateFrequency: '刚刚更新', // 更新频率
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_FEATURE_LIST:
      return state.set('featureList', action.featureList);
    case actionTypes.CHANGE_MEDIA_LIST:
      return state.set('mediaList', action.mediaList);
    case actionTypes.CHANGE_CURRENT_RANKING_ID:
      return state.set('currentRankingID', action.currentRankingID);
    case actionTypes.CHANGE_CURRENT_RANKING_DETAIL:
      return state.set('currentRankingDetail', action.currentRankingDetail);
    case actionTypes.CHANGE_UPDATE_FREQUNCY:
      return state.set('updateFrequency', action.updateFrequency);
    default:
      return state;
  }
};

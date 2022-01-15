import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState = Map({
  category: [], // 类别数据
  currentCategory: '全部', // 当前选中类别
  songCategoryList: [], // 对应的类别列表
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return 1;
    case actionTypes.CHANGE_CURRENT_CATEGORY:
      return 2;
    case actionTypes.CHANGE_SONG_CATEGORY_LIST:
      return state.set('songCategoryList', action.songCategoryList);
    default:
      return state;
  }
};

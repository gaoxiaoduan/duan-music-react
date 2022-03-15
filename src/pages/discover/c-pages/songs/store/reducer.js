import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState = Map({
  category: [], // 类别数据
  currentCategory: '全部', // 当前选中类别
  songCategoryInfo: {}, // 对应的类别所有信息，包含列表
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return state.set('category', action.category);
    case actionTypes.CHANGE_CURRENT_CATEGORY:
      return state.set('currentCategory', action.currentCategory);
    case actionTypes.CHANGE_SONG_CATEGORY_INFO:
      return state.set('songCategoryInfo', action.songCategoryInfo);
    default:
      return state;
  }
};

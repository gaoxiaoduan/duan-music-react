import * as actionTypes from './constants';
import { SONG_LIST_LIMIT } from './constants';

import { songsAPI } from '@/services';
import { handleSongsCategory } from '@/utils/handle-data';

const changeSongInfoAction = (res) => ({
  type: actionTypes.CHANGE_SONG_CATEGORY_INFO,
  songCategoryInfo: res,
});

const changeSongCategoryAction = (category) => ({
  type: actionTypes.CHANGE_CATEGORY,
  category,
});

// 改变当前选中的类别
const changeCurrentCategory = (currentCategory) => ({
  type: actionTypes.CHANGE_CURRENT_CATEGORY,
  currentCategory,
});

// 获取分类歌单列表
export const getSongListAction = (params) => {
  return (dispatch, getState) => {
    songsAPI.getSongCategoryList(params).then((res) => {
      if (res.code === 200) {
        dispatch(changeSongInfoAction(res));
      }
    });
  };
};

export const getSongCategoryAction = () => {
  return (dispatch, getState) => {
    songsAPI.getSongCategory().then((res) => {
      const categoryData = handleSongsCategory(res);
      dispatch(changeSongCategoryAction(categoryData));
    });
  };
};

// 改变当前中歌曲的类别
export const changeCurrentCategoryAction = (currentCategory) => {
  return (dispatch, getState) => {
    let params = {
      cat: currentCategory, // 类别
      limit: SONG_LIST_LIMIT, // 取出歌单数量 , 默认为 50
      offset: 0, // 偏移数量 , 用于分页 , 如: (评论页数 - 1) * 50, 其中 50 为 limit 的值
    };
    // 更新分类列表数据
    dispatch(getSongListAction(params));
    // 更新当前类别
    dispatch(changeCurrentCategory(currentCategory));
  };
};

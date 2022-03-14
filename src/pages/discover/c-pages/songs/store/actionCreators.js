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

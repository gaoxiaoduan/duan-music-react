import * as actionTypes from './constants';
import { SONG_LIST_LIMIT } from './constants';

import { songsAPI } from '@/services';
import { handleSongsCategory } from '@/utils/handle-data';

const changeSongListAction = (res) => ({
  type: actionTypes.CHANGE_SONG_CATEGORY_LIST,
  songCategoryList: res?.playlists,
});

const changeSongCategoryAction = (category) => ({
  type: actionTypes.CHANGE_CATEGORY,
  category,
});

// 获取分类歌单列表
export const getSongListAction = (page = 1) => {
  return (dispatch, getState) => {
    songsAPI.getSongCategoryList().then((res) => {
      dispatch(changeSongListAction(res));
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

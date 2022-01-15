import * as actionTypes from './constants';
import { SONG_LIST_LIMIT } from './constants';

import { songsAPI } from '@/services';

const changeSongListAction = (res) => ({
  type: actionTypes.CHANGE_SONG_CATEGORY_LIST,
  songCategoryList: res?.playlists,
});

// 获取分类歌单列表
export const getSongListAction = (page = 1) => {
  return (dispatch, getState) => {
    songsAPI.getSongCategoryList().then((res) => {
      dispatch(changeSongListAction(res));
    });
  };
};

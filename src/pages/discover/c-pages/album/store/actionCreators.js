import * as actionTypes from './constants';

import { albumAPI } from '@/services';

const changeHotAlbumsAction = (res) => ({
  type: actionTypes.HOT_ALBUMS,
  hotAlbums: res.albums || [],
});

const changeAllAlbumsAction = (res) => ({
  type: actionTypes.ALL_ALBUMS,
  allAlbums: res.albums || [],
});

const changeAllAlbumsTotalAction = (total) => ({
  type: actionTypes.ALL_ALBUMS_TOTAL,
  allAlbumsTotal: total || 0,
});

/**
 * 获取热门新碟
 * @returns 热门新碟数据
 */
export const getHotAlbumsAction = () => {
  return (dispatch) => {
    albumAPI.getHotAlbums().then((res) => {
      dispatch(changeHotAlbumsAction(res));
    });
  };
};

/**
 * 获取全部新碟
 * @param {*} params limit offset area
 * @returns 全部新碟数据
 */
export const getAllAlbumsAction = (params) => {
  return (dispatch) => {
    albumAPI.getAllAlbum(params).then((res) => {
      // console.log(res);
      dispatch(changeAllAlbumsAction(res));
      dispatch(changeAllAlbumsTotalAction(res.total));
    });
  };
};

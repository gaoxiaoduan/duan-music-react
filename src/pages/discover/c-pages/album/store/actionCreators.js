import * as actionTypes from './constants';

import { albumAPI } from '@/services';

const changeHotAlbumsAction = (res) => ({
  type: actionTypes.HOT_ALBUMS,
  hotAlbums: res.albums || [],
});

const changeAllAlbumsAction = (res) => ({
  type: actionTypes.HOT_ALBUMS,
  allAlbums: res.weekData || [],
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
 * @param {*} params 默认参数为 10条，热门新碟
 * @returns 全部新碟数据
 */
export const getAllAlbumsAction = (
  params = {
    limit: 10,
    offset: 0,
    type: 'hot',
  },
) => {
  return (dispatch) => {
    albumAPI.getNewAlbum(params).then((res) => {
      // console.log(res);
      dispatch(changeAllAlbumsAction(res));
    });
  };
};

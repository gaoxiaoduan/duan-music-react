import * as actionTypes from './constants';

import { getTopBanner, getHotRecommend, getNewAlbum } from '@/services/recommend';

const changeBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNER,
  banners: res.banners,
});

const changeHotRecommedAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result,
});

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums,
});

export const getBannerAction = () => {
  return (dispatch) => {
    getTopBanner().then((res) => {
      dispatch(changeBannerAction(res));
    });
  };
};

export const getHotRecommedAction = (limit = 8) => {
  return (dispatch) => {
    getHotRecommend(limit).then((res) => {
      dispatch(changeHotRecommedAction(res));
    });
  };
};

export const getNewAlbumAction = (limit = 10, offset = 0) => {
  return (dispatch) => {
    getNewAlbum(limit, offset).then((res) => {
      dispatch(changeNewAlbumAction(res));
    });
  };
};

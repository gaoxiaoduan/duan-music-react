import * as actionTypes from './constants';

import { getTopBanner, getHotRecommend, getNewAlbum, getTopList } from '@/services/recommend';

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

const changeUpRankingListAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING_LIST,
  upRankingList: res.playlist,
});

const changeNewSongListAction = (res) => ({
  type: actionTypes.CHANGE_NEW_SONG_LIST,
  newSongList: res.playlist,
});

const changeOriginListAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_LIST,
  originList: res.playlist,
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

export const getTopListAction = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      switch (idx) {
        case 0:
          dispatch(changeNewSongListAction(res));
          break;
        case 2:
          dispatch(changeOriginListAction(res));
          break;
        case 3:
          dispatch(changeUpRankingListAction(res));
          break;
        default:
      }
    });
  };
};

import * as actionTypes from './constants';
import * as rankingID from '@/common/constants';

import { getTopBanner, getHotRecommend, getNewAlbum, getTopList, getArtistList } from '@/services/recommend';

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
  newAlbums: res.weekData,
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

const changeArtistListAction = (res) => ({
  type: actionTypes.CHANGE_ARTIST_LIST,
  artistList: res.artists,
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

export const getTopListAction = (id) => {
  return (dispatch) => {
    getTopList(id).then((res) => {
      switch (id) {
        case rankingID.NEWSONGLISTID:
          dispatch(changeNewSongListAction(res));
          break;
        case rankingID.ORIGINLISTID:
          dispatch(changeOriginListAction(res));
          break;
        case rankingID.UPRANKINGLISTID:
          dispatch(changeUpRankingListAction(res));
          break;
        default:
      }
    });
  };
};

export const getArtistListAction = (limit, type, area, initial) => {
  return (dispatch) => {
    getArtistList(limit, type, area, initial).then((res) => {
      dispatch(changeArtistListAction(res));
    });
  };
};

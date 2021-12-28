import * as actionTypes from './constans';

import { playerAPI } from '@/services';

const changeCurrentSongAction = (song) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong: song,
});

export const changePlayerSongAction = (ids) => {
  return (dispatch) => {
    playerAPI.getSongDetail(ids).then((res) => {
      dispatch(changeCurrentSongAction(res.songs[0]));
    });
  };
};

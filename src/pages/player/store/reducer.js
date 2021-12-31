import { Map } from 'immutable';
import * as actionTypes from './constans';

const defaultState = Map({
  playerList: [],
  playerSongIndex: 0,
  currentSong: {},
  playSequence: 0, // 0 顺序播放 1 随机播放 2 单曲循环
  currentLyrics: [], // 当前播放的歌词信息
  currentLyricIndex: 0,
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong);
    case actionTypes.CHANGE_PLAYER_LIST:
      return state.set('playerList', action.playerList);
    case actionTypes.CHANGE_PLAYER_SONG_INDEX:
      return state.set('playerSongIndex', action.playerSongIndex);
    case actionTypes.CHANGE_PLAYER_SEQUENCE:
      return state.set('playSequence', action.playSequence);
    case actionTypes.CHANGE_CURRENT_LYRICS:
      return state.set('currentLyrics', action.currentLyrics);
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set('currentLyricIndex', action.currentLyricIndex);
    default:
      return state;
  }
}

export default reducer;

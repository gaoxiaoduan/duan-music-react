import * as actionTypes from './constans';

import { playerAPI } from '@/services';
import { getRandomNumber } from '@/utils/math-utiles';
import { parseLyric } from '@/utils/parse-lrc';

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});

const changePlayerListAction = (playerList) => ({
  type: actionTypes.CHANGE_PLAYER_LIST,
  playerList,
});

const changePlayerSongIndexAction = (playerSongIndex) => ({
  type: actionTypes.CHANGE_PLAYER_SONG_INDEX,
  playerSongIndex,
});

const changePlayerSequenceAction = (playSequence) => ({
  type: actionTypes.CHANGE_PLAYER_SEQUENCE,
  playSequence,
});

const changeCurrentLyricsAction = (currentLyrics) => ({
  type: actionTypes.CHANGE_CURRENT_LYRICS,
  currentLyrics,
});

export const changeCurrentLyricIndexAction = (currentLyricIndex) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex,
});

export const changePlayerSongAction = (ids) => {
  return (dispatch, getState) => {
    // 1.判断歌曲是否已经存在播放列表中
    let playerList = getState().getIn(['player', 'playerList']);
    const songIndex = playerList.findIndex((song) => song.id === ids);

    if (songIndex !== -1) {
      // 1.1播放列表已经存在该歌曲
      const currentSong = playerList[songIndex];
      dispatch(changePlayerSongIndexAction(songIndex));
      dispatch(changeCurrentSongAction(currentSong));

      dispatch(getLyricAction(currentSong.id));
    } else {
      // 1.2不存在
      playerAPI.getSongDetail(ids).then((res) => {
        const song = res.songs && res.songs[0];
        if (!song) return;
        let newPlayerList = [...playerList];
        newPlayerList.push(song);
        dispatch(changePlayerListAction(newPlayerList));
        dispatch(changePlayerSongIndexAction(newPlayerList.length - 1));
        dispatch(changeCurrentSongAction(song));

        dispatch(getLyricAction(song.id));
      });
    }
  };
};

export const changePlayerSequence = (currentPlaySequence) => {
  if (currentPlaySequence === 3) currentPlaySequence = 0;
  return (dispatch) => {
    dispatch(changePlayerSequenceAction(currentPlaySequence));
  };
};

// -1:上 \ 1:下 | 切换歌曲
export const changeMusicAction = (tag) => {
  return (dispatch, getState) => {
    const playSequence = getState().getIn(['player', 'playSequence']);
    const playerList = getState().getIn(['player', 'playerList']);
    let playerSongIndex = getState().getIn(['player', 'playerSongIndex']);

    let randomIndex = getRandomNumber(playerList.length);
    switch (playSequence) {
      case 1: // 随机播放
        while (playerSongIndex === randomIndex) {
          randomIndex = getRandomNumber(playerList.length);
        }
        playerSongIndex = randomIndex;
        break;
      default:
        // 单曲循环和顺序播放
        playerSongIndex += tag;
        if (playerSongIndex === playerList.length) playerSongIndex = 0; // 到底了，从头开始播放
        if (playerSongIndex === -1) playerSongIndex = playerList.length - 1; // 到头了，切到最后一首
    }

    // 改变当前播放 歌曲和索引
    const currentSong = playerList[playerSongIndex];
    dispatch(changePlayerSongIndexAction(playerSongIndex));
    dispatch(changeCurrentSongAction(currentSong));

    dispatch(getLyricAction(currentSong.id));
  };
};

export const getLyricAction = (id) => {
  return (dispatch) => {
    playerAPI.getLyric(id).then((res) => {
      const lrcString = res.lrc.lyric;
      const lyrics = parseLyric(lrcString);
      dispatch(changeCurrentLyricsAction(lyrics));
    });
  };
};

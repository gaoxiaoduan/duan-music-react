import { Map } from 'immutable';
import * as actionTypes from './constans';

const defaultState = Map({
  playerList: [
    {
      name: '漫天星光（纯音乐版）',
      id: 1906045793,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 12157336,
          name: 'CMJ',
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 5,
      crbt: null,
      cf: '',
      al: {
        id: 137926724,
        name: '漫天星光（网易云音乐2021年度听歌报告主题曲）',
        picUrl: 'https://p1.music.126.net/a2t8hNg8luv2zpdkaJZpPA==/109951166789488656.jpg',
        tns: [],
        pic_str: '109951166789488656',
        pic: 109951166789488660,
      },
      dt: 128160,
      h: {
        br: 320003,
        fid: 0,
        size: 5128365,
        vd: 53933,
      },
      m: {
        br: 192003,
        fid: 0,
        size: 3077037,
        vd: 56553,
      },
      l: {
        br: 128003,
        fid: 0,
        size: 2051373,
        vd: 58356,
      },
      a: null,
      cd: '01',
      no: 2,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 131072,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 5,
      songJumpInfo: null,
      entertainmentTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      mv: 0,
      publishTime: 0,
    },
    {
      name: '孤勇者',
      id: 1901371647,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 2116,
          name: '陈奕迅',
          tns: [],
          alias: [],
        },
      ],
      alia: ['《英雄联盟：双城之战》动画剧集中文主题曲'],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 5,
      crbt: null,
      cf: '',
      al: {
        id: 137142551,
        name: '孤勇者',
        picUrl: 'https://p1.music.126.net/aG5zqxkBRfLiV7A8W0iwgA==/109951166702962263.jpg',
        tns: [],
        pic_str: '109951166702962263',
        pic: 109951166702962260,
      },
      dt: 256000,
      h: {
        br: 320001,
        fid: 0,
        size: 10242285,
        vd: -55735,
      },
      m: {
        br: 192001,
        fid: 0,
        size: 6145389,
        vd: -53179,
      },
      l: {
        br: 128001,
        fid: 0,
        size: 4096941,
        vd: -51651,
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 8192,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 5,
      songJumpInfo: null,
      entertainmentTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 7003,
      mv: 14480854,
      publishTime: 1638892800000,
    },
    {
      name: '好好生活就是美好生活',
      id: 1906097379,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 1030001,
          name: '周深',
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 3,
      crbt: null,
      cf: '',
      al: {
        id: 137934366,
        name: '好好生活就是美好生活',
        picUrl: 'https://p1.music.126.net/N6RvHRPpVmFULH09Beu0Vg==/109951166789161726.jpg',
        tns: [],
        pic_str: '109951166789161726',
        pic: 109951166789161730,
      },
      dt: 222554,
      h: {
        br: 320000,
        fid: 0,
        size: 8904664,
        vd: -38112,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5342816,
        vd: -35517,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3561892,
        vd: -33926,
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 8192,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 3,
      songJumpInfo: null,
      entertainmentTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 1416618,
      mv: 0,
      publishTime: 1640620800000,
    },
  ],
  playerSongIndex: -1,
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
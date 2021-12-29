import request from '@/services/request';

const playerAPI = {
  // 歌曲详细数据
  getSongDetail(ids) {
    return request({
      url: '/song/detail',
      params: {
        ids,
      },
    });
  },
  // 获取歌词信息
  getLyric(id) {
    return request({
      url: '/lyric',
      params: {
        id,
      },
    });
  },
};

export default playerAPI;

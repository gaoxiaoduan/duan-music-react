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
};

export default playerAPI;

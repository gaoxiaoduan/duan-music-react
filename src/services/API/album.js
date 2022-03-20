import request from '@/services/request';
import recommendAPI from './recommend';
const albumAPI = {
  // 获取热门新碟
  getHotAlbums() {
    return request({
      url: '/album/newest',
    });
  },

  // 获取全部新碟
  getNewAlbum: recommendAPI.getNewAlbum,
};

export default albumAPI;

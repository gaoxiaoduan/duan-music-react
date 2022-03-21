import request from '@/services/request';

const albumAPI = {
  // 获取热门新碟
  getHotAlbums() {
    return request({
      url: '/album/newest',
    });
  },

  /**
   * 获取全部新碟
   * @param {*} params
   * limit : 返回数量 , 默认为 30
   * offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
   * area : ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
   * @returns total && albums
   */
  getAllAlbum(
    params = {
      area: 'ALL',
      limit: 30,
      offset: 0,
    },
  ) {
    return request({
      url: '/album/new',
      params: {
        area: params.area,
        limit: params.limit,
        offset: params.offset,
      },
    });
  },
};

export default albumAPI;

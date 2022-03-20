import request from '@/services/request';

const recommendAPI = {
  // 轮播图数据
  getTopBanner() {
    return request({ url: 'banner' });
  },

  // 热门推荐
  getHotRecommend(limit) {
    return request({
      url: '/personalized',
      params: {
        limit,
      },
    });
  },

  /**
   * 新碟上架
   * @param {*} params 参数
   * limit  取出数量 , 默认为 50
   * offset 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
   * area   ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
   * type   new:全部 hot:热门,默认为 new
   * year   年,默认本年
   * month  月,默认本月
   */
  getNewAlbum(params) {
    return request({
      url: '/top/album',
      params: {
        limit: params.limit,
        offset: params.offset,
        area: params.area,
        type: params.type,
        year: params.year,
        month: params.month,
      },
    });
  },

  // 榜单列表
  getTopList(id) {
    return request({
      url: '/playlist/detail',
      params: {
        id,
      },
    });
  },

  // 歌手分类列表
  getArtistList(limit, type = -1, area = -1, initial = -1) {
    return request({
      url: '/artist/list',
      params: {
        limit,
        type,
        area,
        initial,
      },
    });
  },
};

export default recommendAPI;

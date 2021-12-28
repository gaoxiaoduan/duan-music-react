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

  // 新碟上架
  getNewAlbum(limit, offset) {
    return request({
      url: '/top/album',
      params: {
        limit,
        offset,
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

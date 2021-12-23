import request from '@/services/request';

// 轮播图数据
export const getTopBanner = () => {
  return request({ url: 'banner' });
};

// 热门推荐
export function getHotRecommend(limit) {
  return request({
    url: '/personalized',
    params: {
      limit,
    },
  });
}

// 新碟上架
export function getNewAlbum(limit, offset) {
  return request({
    url: '/top/album',
    params: {
      limit,
      offset,
    },
  });
}

// 榜单列表
export function getTopList(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id,
    },
  });
}

// 歌手分类列表
export function getArtistList(limit, type = -1, area = -1, initial = -1) {
  return request({
    url: '/artist/list',
    params: {
      limit,
      type,
      area,
      initial,
    },
  });
}

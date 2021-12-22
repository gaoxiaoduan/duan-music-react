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

import request from '@/services/request';

const rankingAPI = {
  /**
   * 获取榜单列表数据
   * @returns
   */
  getRankingList() {
    return request({
      url: '/toplist',
    });
  },

  /**
   * 获取榜单详细数据
   * @returns
   */
  getRankingDetail(id) {
    return request({
      url: '/playlist/detail',
      params: { id },
    });
  },
};

export default rankingAPI;

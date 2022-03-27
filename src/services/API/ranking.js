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
};

export default rankingAPI;

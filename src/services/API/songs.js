import request from '@/services/request';

const songsAPI = {
  // 获取歌单分类
  getSongCategory() {
    return request({
      url: '/playlist/catlist',
    });
  },
  // 获取歌单
  getSongCategoryList(
    params = {
      cat: '全部', // 类别
      limit: 35, // 取出歌单数量 , 默认为 50
      offset: 0, // 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值
      order: 'new', // order: 可选值为 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot'
    },
  ) {
    return request({
      url: '/top/playlist',
      params,
    });
  },
};

export default songsAPI;

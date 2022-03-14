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
    },
  ) {
    return request({
      url: '/top/playlist',
      params,
    });
  },
};

export default songsAPI;

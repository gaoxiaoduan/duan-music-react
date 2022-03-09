import request from '@/services/request';

const songsAPI = {
  // 获取歌单分类
  getSongCategory() {
    return request({
      url: '/playlist/catlist',
    });
  },
  // 获取歌单
  getSongCategoryList(cat = '全部', limit = 35, offset = 0) {
    return request({
      url: '/top/playlist',
      params: {
        cat, // 类别
        limit, // 取出歌单数量 , 默认为 50
        offset, // 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值
      },
    });
  },
};

export default songsAPI;

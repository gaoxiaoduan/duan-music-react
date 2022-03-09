import React from 'react';
import { Redirect } from 'react-router-dom';

const Discover = React.lazy((_) => import('@/pages/discover')); // 发现音乐
const Recommend = React.lazy((_) => import('@/pages/discover/c-pages/recommend')); // 推荐
const Ranking = React.lazy((_) => import('@/pages/discover/c-pages/ranking')); // 排行榜
const Songs = React.lazy((_) => import('@/pages/discover/c-pages/songs')); // 歌单

const Djradio = React.lazy((_) => import('@/pages/discover/c-pages/djradio')); // 主播电台
const Artist = React.lazy((_) => import('@/pages/discover/c-pages/artist')); // 歌手
const Album = React.lazy((_) => import('@/pages/discover/c-pages/album')); // 新碟上架
const AppPlayer = React.lazy((_) => import('@/pages/player')); // 播放器
const AppSongList = React.lazy((_) => import('@/pages/song-list')); // 歌曲列表页面

const Mine = React.lazy((_) => import('@/pages/mine')); // 我的音乐
const Focus = React.lazy((_) => import('@/pages/focus')); // 关注

const routes = [
  { path: '/', exact: true, render: () => <Redirect to="/discover" /> },
  {
    path: '/discover',
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        component: Recommend,
      },
      {
        path: '/discover/ranking',
        component: Ranking,
      },
      {
        path: '/discover/songs',
        component: Songs,
      },
      {
        path: '/discover/djradio',
        component: Djradio,
      },
      {
        path: '/discover/artist',
        component: Artist,
      },
      {
        path: '/discover/album',
        component: Album,
      },
      {
        path: '/discover/appPlayer',
        component: AppPlayer,
      },
      {
        path: '/discover/appSongList',
        component: AppSongList,
      },
    ],
  },
  {
    path: '/mine',
    exact: true,
    component: Mine,
  },
  {
    path: '/focus',
    exact: true,
    component: Focus,
  },
];

export default routes;

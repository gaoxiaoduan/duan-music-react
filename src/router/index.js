import Discover from '@/pages/discover';
import Mine from '@/pages/mine';
import Focus from '@/pages/focus';

const routes = [
  {
    path: '/',
    exact: true,
    component: Discover,
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
  {
    path: '*',
    component: Discover,
  },
];

export default routes;

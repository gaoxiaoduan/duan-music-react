import request from '@/services/request';

export const getTopBanner = () => {
  return request({ url: 'banner' });
};

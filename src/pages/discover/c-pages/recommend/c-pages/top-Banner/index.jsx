import React, { memo, useEffect, useRef, useCallback, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getBannerAction } from '../../store/actionCreators';

import { Carousel } from 'antd';
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style';

export default memo(function TopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef();

  const dispatch = useDispatch();
  const { topBanners } = useSelector(
    (state) => ({
      topBanners: state.getIn(['recommend', 'topBanners']),
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getBannerAction());
  }, [dispatch]);

  const bannerChange = useCallback((form, to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0);
  }, []);
  const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl + '?imageView&blur=40x20';

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            ref={bannerRef}
            beforeChange={bannerChange}
            effect="fade"
            autoplay
            dots={{
              className: 'redDots',
            }}
          >
            {topBanners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>

        <BannerRight>
          <a href="https://music.163.com/#/download" target="_blank" className="download">
            下载客户端
          </a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
          <span className="shadow left" />
          <span className="shadow right" />
        </BannerRight>

        {/* 轮播图 左右切换 */}
        <BannerControl className="control">
          <button className="btn left" onClick={(e) => bannerRef.current.prev()} />
          <button className="btn right" onClick={(e) => bannerRef.current.next()} />
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});

import React, { memo, useEffect, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getNewAlbumAction } from '../../store/actionCreators';

import { Carousel } from 'antd';
import ThemeHeaderRCM from '@/components/theme-header-rcm';
import AlbumCover from '@/components/album-cover';
import { AlbumWrapper } from './style';

export default memo(function NewAblum() {
  const carouselRef = useRef();

  const dispatch = useDispatch();
  const { newAlbums } = useSelector(
    (store) => ({
      newAlbums: store.getIn(['recommend', 'newAlbums']),
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getNewAlbumAction());
  }, [dispatch]);

  return (
    <AlbumWrapper>
      <ThemeHeaderRCM title="新碟上架" showMore/>
      <div className="content">
        <div className="inner">
          <div className="arrow arrow-left sprite_02" onClick={(e) => carouselRef.current.prev()} />
          <div className="album">
            <Carousel ref={carouselRef} dots={false}>
              {[0, 1].map((i) => (
                <div key={i} className="page">
                  {/* 将长度为10的数字，分为两部分 */}
                  {newAlbums?.slice(i * 5, (i + 1) * 5).map((item) => {
                    return <AlbumCover key={item.id} info={item} />;
                  })}
                </div>
              ))}
            </Carousel>
          </div>
          <div className="arrow arrow-right sprite_02" onClick={(e) => carouselRef.current.next()} />
        </div>
      </div>
    </AlbumWrapper>
  );
});

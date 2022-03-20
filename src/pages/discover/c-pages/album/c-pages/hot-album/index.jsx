import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getHotAlbumsAction } from '../../store/actionCreators';

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import AlbumCover from '@/components/album-cover';
import { Content } from './style';

// 热门新碟
const HotAlbum = memo(() => {
  const dispatch = useDispatch();
  const { hotAlbums } = useSelector(
    (state) => ({
      hotAlbums: state.getIn(['album', 'hotAlbums']),
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getHotAlbumsAction());
  }, []);
  console.log('hotAlbums', hotAlbums);
  return (
    <div>
      <ThemeHeaderRCM title="热门新碟" showTitleDot={false} />

      <Content>
        {hotAlbums?.splice(0, 10).map((item) => (
          <AlbumCover key={item.id} info={item} width="153px" size="130px" bgp="-845px" />
        ))}
      </Content>
    </div>
  );
});

export default HotAlbum;

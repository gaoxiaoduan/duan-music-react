import React, { memo,useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getAllAlbumsAction } from '../../store/actionCreators';

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import { Content } from './style';

const AllAlbum = memo(() => {
  const dispatch = useDispatch();
  // const { hotAlbums } = useSelector(
  //   (state) => ({
  //     hotAlbums: state.getIn(['album', 'hotAlbums']),
  //   }),
  //   shallowEqual,
  // );

  // useEffect(() => {
  //   dispatch(getAllAlbumsAction());
  // }, []);

  return (
    <div>
      <ThemeHeaderRCM title="全部新碟" keywords={['全部', '华语', '欧美', '韩国', '日本']} showTitleDot={false} />

      <Content>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Content>

      <div>
        footer
      </div>
    </div>
  )
})

export default AllAlbum

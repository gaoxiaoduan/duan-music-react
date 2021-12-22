import React, { memo } from 'react';

import { getSizeImage } from '@/utils/format-utils';

import { AlbumWrapper } from './style';

export default memo(function AlbumCover(props) {
  const { info, size = '100px', width = '118px', bgp = '-570px' } = props;

  return (
    <AlbumWrapper size={size} width={width} bgp={bgp} className="sprite_02">
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, 150)} alt="" />
        <a href="/todo" className="cover sprite_covor">
          {info.name}
        </a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  );
});

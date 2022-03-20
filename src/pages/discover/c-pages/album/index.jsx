import React, { memo } from 'react';

import { HotAlbum, AllAlbum } from './c-pages';
import { AlbumWrapper } from './style';

// 新碟上架
export default memo(function Album() {
  return (
    <AlbumWrapper className="wrap-v2">
      <HotAlbum />
      <AllAlbum />
    </AlbumWrapper>
  );
});

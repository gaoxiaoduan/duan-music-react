import React, { memo } from 'react';

import SongsHeader from './c-pages/songs-header';
import SongsList from './c-pages/songs-list';
import { SongsWrapper } from './style';
// 歌单
export default memo(function Songs() {
  return (
    <SongsWrapper className="wrap-v2">
      <SongsHeader />
      <SongsList />
    </SongsWrapper>
  );
});

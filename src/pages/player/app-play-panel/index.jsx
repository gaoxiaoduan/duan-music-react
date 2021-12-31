import React, { memo } from 'react';

import PlayHeader from './c-pages/play-header';
import PlayList from './c-pages/play-list';
import LyricPanel from './c-pages/lyric-panel';
import { PanelWrapper } from './style';

export default memo(function AppPlayPanel(props) {
  return (
    <PanelWrapper>
      <PlayHeader {...props} />

      <div className="main">
        <PlayList />
        <LyricPanel />
      </div>
    </PanelWrapper>
  );
});

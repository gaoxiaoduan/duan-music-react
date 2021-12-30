import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';

export default memo(function PlayHeader() {
  const { playerList, currentSong } = useSelector(
    (state) => ({
      playerList: state.getIn(['player', 'playerList']),
      currentSong: state.getIn(['player', 'currentSong']),
    }),
    shallowEqual,
  );

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <h3>播放列表({playerList.length})</h3>
        <div className="operator">
          <a href="#" className="favorWrapper">
            <i className="sprite_playlist icon favor" />
            收藏全部
          </a>
          <span className="line" />
          <a href="#" className="removeWrapper">
            <i className="sprite_playlist icon remove" />
            清除
          </a>
        </div>
      </HeaderLeft>
      <HeaderRight>
        <div className="empty" />
        <h3 className="title">{currentSong.name}</h3>
        <span className="sprite_playlist closeButton">关闭</span>
      </HeaderRight>
    </HeaderWrapper>
  );
});

import React, { memo, useEffect, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { scrollTo } from '@/utils/ui-utiles';
import { LyricWrapper } from './style';

export default memo(function LyricPanel() {
  const lyricPanelRef = useRef();

  const { currentLyricIndex, currentLyrics } = useSelector(
    (state) => ({
      currentLyricIndex: state.getIn(['player', 'currentLyricIndex']),
      currentLyrics: state.getIn(['player', 'currentLyrics']),
    }),
    shallowEqual,
  );

  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    scrollTo(lyricPanelRef.current, (currentLyricIndex - 3) * 32, 300);
  }, [currentLyricIndex]);

  return (
    <LyricWrapper>
      <ul ref={lyricPanelRef} className="listlyric">
        {currentLyrics.map((item, index) => {
          return (
            <li key={item.time} className={index === currentLyricIndex ? 'listlyric-item active' : 'listlyric-item'}>
              {item.content}
            </li>
          );
        })}
      </ul>
    </LyricWrapper>
  );
});

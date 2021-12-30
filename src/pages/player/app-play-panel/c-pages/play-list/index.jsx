import React, { memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { changePlayerSongAction } from '@/pages/player/store';

import { formatMinuteSecond } from '@/utils/format-utils';

import { PlayListWrapper } from './style';
export default memo(function PlayList() {
  const { playerList, currentSong } = useSelector(
    (state) => ({
      playerList: state.getIn(['player', 'playerList']),
      currentSong: state.getIn(['player', 'currentSong']),
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();

  return (
    <PlayListWrapper>
      <ul className="list">
        {playerList.map((item) => {
          return (
            <li
              className={currentSong.id === item.id ? 'listItem active' : 'listItem'}
              key={item.id}
              onClick={(e) => dispatch(changePlayerSongAction(item.id))}
            >
              <div className="currentPlay">
                <i className="sprite_playlist playicn" />
              </div>
              <div className="songName text-nowrap">{item.name}</div>
              <div className="icns">
                <i className="sprite_playlist icon ico-add" />
                <i className="sprite_playlist icon ico-share" />
                <i className="sprite_playlist icon ico-dl" />
                <i className="sprite_playlist icon icn-del" />
              </div>
              <div className="author text-nowrap">
                <a href="#">{(item?.ar && item.ar[0]?.name) || ''}</a>
              </div>
              <div className="duration">{formatMinuteSecond(item.dt)}</div>
              <div className="src">
                <a href="#" className="sprite_playlist link" />
              </div>
            </li>
          );
        })}
      </ul>
    </PlayListWrapper>
  );
});

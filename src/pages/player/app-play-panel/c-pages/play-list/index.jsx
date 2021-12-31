import React, { memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { changePlayerSongAction, delPlayerListAction } from '@/pages/player/store';

import { formatMinuteSecond } from '@/utils/format-utils';
import { appMessage } from '@/utils/message-utils';
import { PlayListWrapper } from './style';

export default memo(function PlayList() {
  const dispatch = useDispatch();
  const { playerList, currentSong } = useSelector(
    (state) => ({
      playerList: state.getIn(['player', 'playerList']),
      currentSong: state.getIn(['player', 'currentSong']),
    }),
    shallowEqual,
  );

  const info = (e) => {
    e.stopPropagation();
    appMessage({
      content: 666, // 随机显示
      duration: 1,
    });
  };

  const handleDelete = (e, song) => {
    e.stopPropagation();
    dispatch(delPlayerListAction(song.id));
  };

  return (
    <PlayListWrapper>
      <ul className="list">
        {playerList?.map((item) => {
          return (
            <li
              key={item.id}
              className={currentSong.id === item.id ? 'listItem active' : 'listItem'}
              onClick={(e) => dispatch(changePlayerSongAction(item.id))}
            >
              <div className="currentPlay">
                <i className="sprite_playlist playicn" />
              </div>
              <div className="songName text-nowrap">{item.name}</div>
              <div className="icns">
                <i className="sprite_playlist icon ico-add" onClick={(e) => info(e)} />
                <i className="sprite_playlist icon ico-share" onClick={(e) => info(e)} />
                <i className="sprite_playlist icon ico-dl" onClick={(e) => info(e)} />
                <i className="sprite_playlist icon icn-del" onClick={(e) => handleDelete(e, item)} />
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

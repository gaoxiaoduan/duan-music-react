/* eslint-disable react/jsx-curly-brace-presence */
import React, { memo, useEffect, useState, useRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  changePlayerSongAction,
  changePlayerSequence,
  changeMusicAction,
  changeCurrentLyricIndexAction,
} from '../store/actionCreators';

import { Slider, message } from 'antd';
import AppPlayPanel from '../app-play-panel';
import { getSizeImage, formatMinuteSecond, getPlayUrl } from '@/utils/format-utils';

import { PlaybarWrapper, Control, PlayInfo, Operator } from './style';

export default memo(function AppPlayBar() {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0); // 歌曲时长
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0); // 控制歌曲进度条
  const [isChanging, setIsChanging] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  // redux hooks
  const dispatch = useDispatch();
  const { currentSong, playSequence, playerList, currentLyrics, currentLyricIndex } = useSelector(
    (state) => ({
      currentSong: state.getIn(['player', 'currentSong']),
      playSequence: state.getIn(['player', 'playSequence']),
      playerList: state.getIn(['player', 'playerList']),
      currentLyrics: state.getIn(['player', 'currentLyrics']),
      currentLyricIndex: state.getIn(['player', 'currentLyricIndex']),
    }),
    shallowEqual,
  );

  // useEffect(() => {
  //   dispatch(changePlayerSongAction(167876));
  // }, [dispatch]);

  useEffect(() => {
    if (Object.keys(currentSong).length !== 0) {
      audioRef.current.src = getPlayUrl(currentSong.id);
      setDuration(currentSong.dt);
      audioRef.current
        .play()
        .then((res) => {
          setIsPlaying(true);
        })
        .catch((err) => {
          setIsPlaying(false);
        });
    }
  }, [currentSong]);

  const changePlaySequence = () => {
    // playSequence:0 顺序播放 1 随机播放 2 单曲循环

    dispatch(changePlayerSequence(playSequence + 1));
    // console.log(playSequence);
  };

  // 播放暂停
  const play = useCallback(() => {
    if (!playerList.length) {
      message.info('当前播放列表为空，请先添加歌曲🎵');
      return;
    }

    setIsPlaying(!isPlaying);
    isPlaying
      ? audioRef.current.pause()
      : audioRef.current.play().catch((err) => {
          setIsPlaying(false);
        });
  }, [isPlaying]);

  // 播放时间更新
  const timeUpdate = (e) => {
    // 获取到的是秒，要转成毫秒
    const currentTime = e.target.currentTime;
    if (!isChanging) {
      setCurrentTime(currentTime * 1000);
      setProgress(((currentTime * 1000) / duration) * 100);
    }

    let lyricIndex = -1;
    for (let i = 0; i < currentLyrics.length; i++) {
      if (currentLyrics[i].time > currentTime * 1000) {
        lyricIndex = i;
        break;
      }
    }

    if (lyricIndex !== -1 && currentLyricIndex !== lyricIndex - 1) {
      dispatch(changeCurrentLyricIndexAction(lyricIndex - 1));
    }
    // fix:修复最后一行歌词没有高亮的问题
    if (lyricIndex === -1 && currentLyricIndex + 1 === currentLyrics.length - 1) {
      dispatch(changeCurrentLyricIndexAction(currentLyricIndex + 1));
    }
  };

  // 滑块被滑动时触发
  const sliderChange = useCallback(
    (value) => {
      setIsChanging(true);
      const time = (value / 100.0) * duration;
      setCurrentTime(time);
      setProgress(value);
    },
    [duration],
  );

  // 滑块被点击触发
  const sliderAfterChange = useCallback(
    (value) => {
      setIsChanging(true);
      const currentTime = (value / 100) * duration;
      const time = currentTime / 1000;
      audioRef.current.currentTime = time;
      setCurrentTime(currentTime);
      setIsChanging(false);
    },
    [duration, isPlaying],
  );

  // 歌曲结束
  const handleMusicEnd = useCallback(() => {
    if (playSequence === 2) {
      // 单曲循环
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .then((res) => {
          setIsPlaying(true);
        })
        .catch((err) => {
          setIsPlaying(false);
        });
    } else {
      dispatch(changeMusicAction(1));
    }
  }, [playSequence]);

  const handleColse = useCallback(() => {
    setShowPanel(!showPanel);
  }, [showPanel]);

  const changeMusic = (tag) => {
    if (playerList.length === 0) return;
    dispatch(changeMusicAction(tag));
  };

  return (
    <PlaybarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        {/* 控制相关 */}
        <Control isPlaying={isPlaying}>
          <button className="sprite_playbar prev" onClick={(e) => changeMusic(-1)} />
          <button className="sprite_playbar play" onClick={(e) => play()} />
          <button className="sprite_playbar next" onClick={(e) => changeMusic(1)} />
        </Control>

        {/* 当前播放详情 */}
        <PlayInfo>
          <div className="image">
            {playerList.length !== 0 || audioRef?.current?.src ? (
              <NavLink to="/discover/appPlayer">
                <img src={getSizeImage(currentSong?.al?.picUrl, 35)} alt={currentSong?.name || ''} />
              </NavLink>
            ) : (
              <img src="http://s4.music.126.net/style/web2/img/default/default_album.jpg" />
            )}
          </div>

          {/* 歌曲详情 */}
          <div className="info">
            <div className="song">
              <NavLink to="/discover/appPlayer" className="song-name">
                {currentSong?.name || ''}
              </NavLink>

              <a href="todo" className="singer-name">
                {(currentSong?.ar && currentSong.ar[0]?.name) || ''}
              </a>

              {(playerList.length !== 0 || audioRef?.current?.src) && <a href="todo" className="sprite_playbar src" />}
            </div>

            <div className="progress">
              <Slider value={progress} onChange={sliderChange} onAfterChange={sliderAfterChange} tipFormatter={null} />
              <div className="time">
                <span className="now-time">{formatMinuteSecond(currentTime)}</span>
                <span className="divider">/</span>
                <span className="total-time">{formatMinuteSecond(duration)}</span>
              </div>
            </div>
          </div>
        </PlayInfo>

        {/* 操作相关 */}
        <Operator sequence={playSequence}>
          <div className="left">
            <button className="sprite_playbar btn favor" />
            <button className="sprite_playbar btn share" />
          </div>
          <div className="right sprite_playbar">
            {/* 音量 */}
            <button className="sprite_playbar btn volume" />

            {/* 歌曲循环 */}
            <button className="sprite_playbar btn loop" onClick={(e) => changePlaySequence()} />

            {/* 歌曲列表卡片 */}
            <button className="sprite_playbar btn playlist" onClick={(e) => setShowPanel(!showPanel)}>
              {playerList.length || 0}
            </button>
          </div>
        </Operator>
      </div>

      <audio ref={audioRef} onTimeUpdate={(e) => timeUpdate(e)} onEnded={(e) => handleMusicEnd()} />
      {showPanel && <AppPlayPanel handleColse={handleColse} />}
    </PlaybarWrapper>
  );
});

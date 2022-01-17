import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import { getSizeImage, getCount } from '@/utils/format-utils';

import { ThemeCoverWrapper } from './style';

export default memo(function SongsCover(props) {
  const { info, isRecommend = false } = props;
  let history = useHistory();

  // 跳转到播放列表页面，待完善
  const goToRouter = (target) => {
    history.push(target);
  };

  return (
    <ThemeCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info?.picUrl || info?.coverImgUrl, 140)} alt={info?.name || '图片介绍'} />

        <div className="cover sprite_covor" onClick={(e) => goToRouter('/discover/appSongList')}>
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji" />
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play" />
          </div>
        </div>
      </div>
      <div className={isRecommend ? 'cover-bottom' : 'cover-bottom text-nowrap'}>{info.name}</div>
      {!isRecommend && (
        <div className="cover-source text-nowrap">by {info?.copywriter || info?.creator?.nickname || ''}</div>
      )}
    </ThemeCoverWrapper>
  );
});

import React, { memo } from 'react';

import { getSizeImage, getCount } from '@/utils/format-utils';

import { ThemeCoverWrapper } from './style';

export default memo(function SongsCover(props) {
  const { info, isRecommend = false } = props;

  return (
    <ThemeCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info?.picUrl || info?.coverImgUrl, 140)} alt={info?.name || '图片介绍'} />
        <div className="cover sprite_covor">
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

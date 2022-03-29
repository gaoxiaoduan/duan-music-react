import React, { memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getSizeImage } from '@/utils/format-utils';
import { appMessage } from '@/utils/message-utils';
import dayjs from 'dayjs';

import { RankingInfoWrapper } from './style';

const RankingInfo = memo(() => {
  const { currentRankingDetail = {}, updateFrequency } = useSelector(
    (store) => ({
      currentRankingDetail: store.getIn(['ranking', 'currentRankingDetail']),
      updateFrequency: store.getIn(['ranking', 'updateFrequency']),
    }),
    shallowEqual,
  );
  // console.log(currentRankingDetail);

  const handleClick = () => {
    appMessage({
      content: 888,
    });
  };

  const handleUpdateTime = (time) => dayjs(time).format('MM月DD日');

  return (
    <RankingInfoWrapper>
      <div className="cover">
        <img src={getSizeImage(currentRankingDetail.coverImgUrl, 150)} alt="" />
        <div className="mask sprite_covor" />
      </div>
      <div className="cnt">
        <h2 className="ranking_name">{currentRankingDetail.name || '飙升榜'}</h2>
        <div className="time_info">
          <i className="icon sprite_icon2" />
          <span className="updateDate">最近更新：{handleUpdateTime(currentRankingDetail.updateTime) || 0}</span>
          <span className="updateTime">（{updateFrequency || ''}）</span>
        </div>
        <div className="btns">
          {/* 播放 */}
          <div className="btn sprite_button play" onClick={handleClick}>
            <i className="sprite_button">
              <em className="sprite_button play_icon" />
              播放
            </i>
          </div>
          {/* 添加到播放列表 */}
          <div className="btn sprite_button add" onClick={handleClick}>
            <i />
          </div>

          {/* 收藏数 */}
          <div className="btn sprite_button collection" onClick={handleClick}>
            <i className="sprite_button">({currentRankingDetail.subscribedCount || 0})</i>
          </div>
          {/* 转发数量 */}
          <div className="btn sprite_button share" onClick={handleClick}>
            <i className="sprite_button">({currentRankingDetail.shareCount || 0})</i>
          </div>
          {/* 下载数量 */}
          <div className="btn sprite_button download" onClick={handleClick}>
            <i className="sprite_button">下载</i>
          </div>
          {/* 评论数 */}
          <div className="btn sprite_button comment" onClick={handleClick}>
            <i className="sprite_button">({currentRankingDetail.commentCount || 0})</i>
          </div>
        </div>
      </div>
    </RankingInfoWrapper>
  );
});

export default RankingInfo;

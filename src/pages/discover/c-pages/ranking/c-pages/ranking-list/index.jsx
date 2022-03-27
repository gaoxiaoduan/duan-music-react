import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getRankingListAction, getRankingDeatilByIDAction } from '../../store/actionCreators';

import { getSizeImage } from '@/utils/format-utils';
import { RankingListWrapper } from './style';

/**
 * 榜单列表
 */
const RankingList = memo(() => {
  const dispatch = useDispatch();
  const { featureList, mediaList, currentRankingID } = useSelector(
    (store) => ({
      featureList: store.getIn(['ranking', 'featureList']),
      mediaList: store.getIn(['ranking', 'mediaList']),
      currentRankingID: store.getIn(['ranking', 'currentRankingID']),
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getRankingListAction());
  }, []);

  const ListItem = (infoData = []) => {
    return infoData.map((item) => (
      <li
        key={item.id}
        className={item.id === currentRankingID ? 'rankingItem active' : 'rankingItem'}
        onClick={() => dispatch(getRankingDeatilByIDAction(item.id))}
      >
        <img src={getSizeImage(item.coverImgUrl, 40)} alt={item.name || ''} className="left_img" />
        <div className="right_description">
          <div className="name">{item.name || ''}</div>
          <span className="updateFrequency">{item.updateFrequency || ''}</span>
        </div>
      </li>
    ));
  };

  return (
    <RankingListWrapper>
      {/* 云音乐特色榜 */}
      <h2
        className="mini_title"
        style={{
          marginTop: '40px',
        }}
      >
        云音乐特色榜
      </h2>
      <ul>{ListItem(featureList)}</ul>

      {/* 全球媒体榜 */}
      <h2
        className="mini_title"
        style={{
          marginTop: '20px',
        }}
      >
        全球媒体榜
      </h2>
      <ul>{ListItem(mediaList)}</ul>
    </RankingListWrapper>
  );
});

export default RankingList;

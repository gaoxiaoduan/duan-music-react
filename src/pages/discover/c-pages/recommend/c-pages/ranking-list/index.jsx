import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getTopListAction } from '../../store/actionCreators';
import * as rankingID from '@/common/constants';

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import TopRanking from '@/components/top-ranking';
import { RankingWrapper } from './style';

export default memo(function RankingList() {
  const dispatch = useDispatch();
  const { upRankingList, newSongList, originList } = useSelector(
    (store) => ({
      upRankingList: store.getIn(['recommend', 'upRankingList']),
      newSongList: store.getIn(['recommend', 'newSongList']),
      originList: store.getIn(['recommend', 'originList']),
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getTopListAction(rankingID.UPRANKINGLISTID));
    dispatch(getTopListAction(rankingID.NEWSONGLISTID));
    dispatch(getTopListAction(rankingID.ORIGINLISTID));
  }, [dispatch]);

  return (
    <RankingWrapper>
      <ThemeHeaderRCM title="榜单" showMore/>
      <div className="tops">
        <TopRanking info={upRankingList} />
        <TopRanking info={newSongList} />
        <TopRanking info={originList} />
      </div>
    </RankingWrapper>
  );
});

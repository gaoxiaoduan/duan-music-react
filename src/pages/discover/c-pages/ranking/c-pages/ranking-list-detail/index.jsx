import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getRankingDeatilByIDAction } from '../../store/actionCreators';
import RankingInfo from './c-pages/ranking-info';
import RankingTable from './c-pages/ranking-table';
import { RankingListDetailWrapper } from './style';

/**
 * 榜单列表详情
 */
const RankingListDetail = memo(() => {
  const dispatch = useDispatch();
  const { currentRankingID } = useSelector(
    (store) => ({
      currentRankingID: store.getIn(['ranking', 'currentRankingID']),
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getRankingDeatilByIDAction(currentRankingID));
  }, []);

  return (
    <RankingListDetailWrapper>
      <RankingInfo />
      <RankingTable />
    </RankingListDetailWrapper>
  );
});

export default RankingListDetail;

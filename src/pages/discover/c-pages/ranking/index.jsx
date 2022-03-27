import React, { memo } from 'react';

import RankingList from './c-pages/ranking-list';
import RankingListDetail from './c-pages/ranking-list-detail';
import { RankingWrapper } from './style';

export default memo(function Ranking() {
  return (
    <RankingWrapper className="wrap-v2">
      <RankingList />
      <RankingListDetail />
    </RankingWrapper>
  );
});

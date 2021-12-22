import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getHotRecommedAction } from '../../store/actionCreators';

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import { RecommendWrapper } from './style';

export default memo(function HotRecommed() {
  const dispatch = useDispatch();
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(['recommend', 'hotRecommends']),
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getHotRecommedAction(8));
  }, [dispatch]);

  return (
    <RecommendWrapper>
      <ThemeHeaderRCM title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']} />
      <div className="recommend-list">
        {hotRecommends?.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </RecommendWrapper>
  );
});

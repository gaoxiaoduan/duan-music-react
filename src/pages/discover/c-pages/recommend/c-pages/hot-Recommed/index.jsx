import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getHotRecommedAction } from '../../store/actionCreators';

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import SongsCover from '@/components/songs-cover';
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
      <ul className="recommend-list">
        {hotRecommends?.map((item) => {
          return (
            <li key={item.id}>
              <SongsCover info={item} isRecommend />
            </li>
          );
        })}
      </ul>
    </RecommendWrapper>
  );
});

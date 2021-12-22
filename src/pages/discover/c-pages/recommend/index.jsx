import React, { memo } from 'react';

import TopBanner from './c-pages/top-Banner';
import HotRecommed from './c-pages/hot-Recommed';
import NewAblum from './c-pages/new-ablum';
import RankingList from './c-pages/ranking-list';
import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style';

function Recommend(props) {
  return (
    <RecommendWrapper>
      <TopBanner />

      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommed />
          <NewAblum />
          <RankingList />
        </RecommendLeft>

        <RecommendRight>RecommendRight</RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(Recommend);

// function Recommend(props) {
//   const { getBanners, topBanners } = props;
//   useEffect(() => {
//     getBanners();
//   }, [getBanners]);

//   return <div>Recommend{topBanners.length}</div>;
// }

// const mapStateToProps = (state) => ({
//   topBanners: state.recommend.topBanners,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getBanners: () => {
//     dispatch(getBannerAction());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));

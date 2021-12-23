import React, { memo } from 'react';

import { TopBanner, HotRecommed, NewAblum, RankingList, UserLogin, HotAnchor, InSinger } from './c-pages';

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

        <RecommendRight>
          <UserLogin />
          <HotAnchor />
          <InSinger />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(Recommend);

// TODO: 最初引入的redux代码
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

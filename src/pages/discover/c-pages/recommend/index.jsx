import React, { memo } from 'react';

import TopBanner from './c-pages/topBanner';
import { RecommendWrapper } from './style';

function Recommend(props) {
  return (
    <RecommendWrapper>
      <TopBanner />
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

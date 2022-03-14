import React, { memo, useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getSongCategoryAction } from '../../store/actionCreators';
import SongsCategoty from '../songs-category';
import { SongsHeaderWrapper, SongsHeaderLeft, SongsHeaderRight } from './style';

export default memo(function SongsHeader() {
  const [showCategory, setShowCategory] = useState(false);
  const dispatch = useDispatch();

  const { category } = useSelector(
    (state) => ({
      category: state.getIn(['songs', 'category']),
    }),
    shallowEqual,
  );

  // 请求歌曲分类
  useEffect(() => {
    dispatch(getSongCategoryAction());
  }, []);

  return (
    <SongsHeaderWrapper>
      <SongsHeaderLeft>
        <h3 className="title">全部</h3>
        <div
          className="select sprite_button"
          onClick={(e) => {
            e.nativeEvent.stopImmediatePropagation();
            showCategory ? setShowCategory(false) : setShowCategory(true);
          }}
        >
          <div className="sprite_button">
            选择分类 <i className="sprite_icon2" />
          </div>
        </div>
        {showCategory && <SongsCategoty category={category} handleColse={() => setShowCategory(false)} />}
      </SongsHeaderLeft>

      <SongsHeaderRight>
        <div className="hot sprite_button2">热门</div>
      </SongsHeaderRight>
    </SongsHeaderWrapper>
  );
});

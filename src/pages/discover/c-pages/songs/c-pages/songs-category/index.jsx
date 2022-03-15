import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { changeCurrentCategoryAction } from '../../store/actionCreators';

import { SongsCategoryWapper } from './style';

// 歌单分类，选择分类部分
export default memo(function SongsCategoty(props) {
  const { category = [], handleColse } = props;

  const dispatch = useDispatch();
  const { currentCategory } = useSelector(
    (state) => ({
      currentCategory: state.getIn(['songs', 'currentCategory']),
    }),
    shallowEqual,
  );

  const handleColseCallback = () => {
    handleColse();
  };

  useEffect(() => {
    document.addEventListener('click', handleColseCallback);
    return () => {
      document.removeEventListener('click', handleColseCallback);
    };
  });

  // 选择分类事件
  const handleSelectCategory = (selectName) => {
    dispatch(changeCurrentCategoryAction(selectName));
    handleColse();
  };

  return (
    <div onClick={(e) => e.nativeEvent.stopImmediatePropagation()}>
      <SongsCategoryWapper>
        <i className="arrow sprite_icon" />
        <div className="songs_category_header">
          <div className="all_btn sprite_button2" onClick={(e) => handleSelectCategory('全部')}>
            全部风格
          </div>
        </div>

        <div className="songs_category_body">
          {category.map((item) => {
            return (
              <div className="line" key={item.name}>
                <div className="line_title">
                  <i className="icon sprite_icon2" />
                  <span>{item.name}</span>
                </div>
                <div className="line_content">
                  {item.subs.map((items) => {
                    return (
                      <React.Fragment key={items.name}>
                        <span
                          onClick={() => handleSelectCategory(items.name)}
                          className={currentCategory === items.name ? 'active' : ''}
                        >
                          {items.name}
                        </span>
                        <span className="divider">|</span>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </SongsCategoryWapper>
    </div>
  );
});

import React, { memo, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getSongCategoryAction } from '../../store/actionCreators';

import { SongsCategoryWapper } from './style';

// 歌单分类，选择分类部分
export default memo(function SongsCategoty() {
  const dispatch = useDispatch();
  const { category } = useSelector(
    (state) => ({
      category: state.getIn(['songs', 'category']),
    }),
    shallowEqual,
  );
  console.log(category);
  useEffect(() => {
    dispatch(getSongCategoryAction());
  }, []);

  return (
    <SongsCategoryWapper>
      <i className="arrow sprite_icon" />
      <div className="songs_category_header">
        <NavLink to="/discover/songs" className="all_btn sprite_button2">
          全部风格
        </NavLink>
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
                      <a href="#">{items.name}</a>
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
  );
});

import React, { memo, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { SongsCategoryWapper } from './style';

// 歌单分类，选择分类部分
export default memo(function SongsCategoty(props) {
  const { category = [], handleColse } = props;

  const handleColseCallback = () => {
    handleColse();
  };

  useEffect(() => {
    document.addEventListener('click', handleColseCallback);
    return () => {
      document.removeEventListener('click', handleColseCallback);
    };
  });

  return (
    <div
      onClick={(e) => {
        e.nativeEvent.stopImmediatePropagation();
      }}
    >
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
    </div>
  );
});

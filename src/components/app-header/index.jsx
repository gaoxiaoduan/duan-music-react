import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { headerLinks } from '@/common/loacl-data';
import { HeaderWrapperStyles, HeaderLeft, HeaderRight } from './style';

const AppHeader = () => {
  const showItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link} exact>
          {item.title}
          <i className="sprite_01 icon">&nbsp;</i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} target="_blank">
          {item.title}
        </a>
      );
    }
  };

  return (
    <HeaderWrapperStyles>
      <div className="wrap-v1 content">
        <HeaderLeft>
          <h1>
            <a href="#/" className="logo sprite_01">
              duan-music
            </a>
          </h1>

          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className="select-item" key={item.title}>
                  {showItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>

        <HeaderRight>
          <Input className="search" prefix={<SearchOutlined />} placeholder="音乐/视频/电台/用户" />
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="bar">&nbsp;</div>
    </HeaderWrapperStyles>
  );
};

export default memo(AppHeader);

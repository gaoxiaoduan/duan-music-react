import React, { memo } from 'react';

import { UserLoginWrapper } from './style';

export default memo(function UserLogin() {
  return (
    <UserLoginWrapper>
      <div className="content sprite_02">
        <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <a href="todo" className="m0Auto login-btn sprite_02">
          用户登录
        </a>
      </div>
    </UserLoginWrapper>
  );
});

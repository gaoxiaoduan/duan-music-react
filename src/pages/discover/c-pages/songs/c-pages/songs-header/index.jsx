import React, { memo } from 'react';

import { SongsHeaderWrapper, SongsHeaderLeft, SongsHeaderRight } from './style';
export default memo(function SongsHeader() {
  return (
    <SongsHeaderWrapper>
      <SongsHeaderLeft>
        <h3 className="title">流行</h3>
        <div className="select sprite_button">
          <div className="sprite_button">
            选择分类 <i className="sprite_icon2" />
          </div>
        </div>
      </SongsHeaderLeft>

      <SongsHeaderRight>
        <div className="hot sprite_button2">热门</div>
      </SongsHeaderRight>
    </SongsHeaderWrapper>
  );
});

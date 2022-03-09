import React, { memo, useState } from 'react';

import SongsCategoty from '../songs-category';
import { SongsHeaderWrapper, SongsHeaderLeft, SongsHeaderRight } from './style';

export default memo(function SongsHeader() {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <SongsHeaderWrapper>
      <SongsHeaderLeft>
        <h3 className="title">全部</h3>
        <div className="select sprite_button" onClick={(e) => setShowCategory(!showCategory)}>
          <div className="sprite_button">
            选择分类 <i className="sprite_icon2" />
          </div>
        </div>
        {showCategory && <SongsCategoty />}
      </SongsHeaderLeft>

      <SongsHeaderRight>
        <div className="hot sprite_button2">热门</div>
      </SongsHeaderRight>
    </SongsHeaderWrapper>
  );
});

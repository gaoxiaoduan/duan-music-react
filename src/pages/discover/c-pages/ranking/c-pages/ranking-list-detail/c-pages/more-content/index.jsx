import React, { memo } from 'react';

import { MoreContentWrapper } from './style';

// 更多内容
const MoreContent = memo(() => {
  return (
    <MoreContentWrapper>
      <div className="text">查看更多内容，请下载客户端</div>
      <a href="https://music.163.com/#/download" className="download">
        立即下载
      </a>
    </MoreContentWrapper>
  );
});

export default MoreContent;

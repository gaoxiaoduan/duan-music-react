import React, { memo } from 'react';

import { appMessage } from '@/utils/message-utils';
import { MineWrapper, Content } from './style';

export default memo(function Mine() {
  const handleLogin = () => {
    appMessage({
      content: 888,
    });
  };

  return (
    <MineWrapper>
      <Content className="wrap-v2">
        <div className="pic sprite_friend">
          <div className="login sprite_friend" onClick={handleLogin} />
        </div>
      </Content>
    </MineWrapper>
  );
});

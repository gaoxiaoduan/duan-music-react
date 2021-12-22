import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { HeaderWrapper } from './style';

export default memo(function ThemeHeaderRCM(props) {
  const { title = '', keywords = [], moreLink = 'todo...', keywordClick = () => {} } = props;
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <div className="title">{title}</div>

        <div className="keyword">
          {keywords.map((item, index) => {
            return (
              <div className="item" key={item}>
                <span className="link" onClick={(e) => keywordClick(item)}>
                  {item}
                </span>
                {index !== keywords.length - 1 && <span className="divider">|</span>}
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <Link to={moreLink}>更多</Link>
        <i className="icon sprite_02" />
      </div>
    </HeaderWrapper>
  );
});

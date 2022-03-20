import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { HeaderWrapper } from './style';

export default memo(function ThemeHeaderRCM(props) {
  const {
    title = '', // 标题
    keywords = [], // 关键字
    keywordClick = () => {}, // 关键字链接跳转内容
    showMore = false, // 是否显示更多, 默认不显示
    moreLink = 'todo...', // 更多跳转目标
    showTitleDot = true, // 是否显示标题前的dot，默认显示
  } = props;

  return (
    <HeaderWrapper className={showTitleDot ? 'sprite_02' : 'hideDot'}>
      <div className="left">
        <div className={`title ${!showTitleDot && 'hideDot'}`}>{title}</div>

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

      {showMore && (
        <div className="right">
          <Link to={moreLink}>更多</Link>
          <i className="icon sprite_02" />
        </div>
      )}
    </HeaderWrapper>
  );
});

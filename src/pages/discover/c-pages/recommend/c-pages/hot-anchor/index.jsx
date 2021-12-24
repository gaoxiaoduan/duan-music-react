import React, { memo } from 'react';

import { getSizeImage } from '@/utils/format-utils';
import { hotAnchors } from '@/common/loacl-data';
import ThemeHeaderSmall from '@/components/theme-header-small';
import { HotAnchorWrapper } from './style';

export default memo(function HotAnchor() {
  return (
    <HotAnchorWrapper>
      <ThemeHeaderSmall title="热门主播" />
      <ul className="hot-anchor-list">
        {hotAnchors.map((item) => {
          return (
            <li key={item.url} className="hot-anchor-list-item">
              <a href="todo">
                <img src={getSizeImage(item.picUrl, 40)} alt={item.name} />
              </a>
              <div className="info">
                <p className="name text-nowrap">
                  <a href="todo">{item.name}</a>
                </p>
                <div className="text-nowrap">{item.position}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </HotAnchorWrapper>
  );
});

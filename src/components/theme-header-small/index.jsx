import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { ThemeHeaderSmallWrapper } from './style';

export default memo(function ThemeHeaderSmall(props) {
  const { title = '', more = '', to = '' } = props;
  return (
    <ThemeHeaderSmallWrapper>
      <h3>
        <span>{title}</span>
        {more && <NavLink to={to}>{more}</NavLink>}
      </h3>
    </ThemeHeaderSmallWrapper>
  );
});

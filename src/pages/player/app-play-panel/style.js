import styled from 'styled-components';

export const PanelWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 44px;
  width: 986px;
  height: 301px;
  margin-left: -493px;

  .main {
    display: flex;
    padding: 0 5px;
    height: 260px;
    overflow: hidden;
    background: url(${require('@/assets/img/playpanel_bg.png')}) -1014px 0 repeat-y;
  }
`;

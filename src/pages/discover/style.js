import styled from 'styled-components';

export const DiscoverWrapper = styled.div`
  .top {
    height: 25px;
    background-color: #c20c0c;
  }
`;

export const TopMenu = styled.div`
  display: flex;
  padding-left: 180px;
  position: relative;

  .item {
    a {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 13px;
      margin: 0 17px;
      color: #fff;

      &:hover,
      &.active {
        text-decoration: none;
        background-color: #9b0909;
        border-radius: 20px;
      }
    }
  }
`;

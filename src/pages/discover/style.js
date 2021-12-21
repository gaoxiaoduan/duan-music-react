import styled from 'styled-components';

export const DiscoverWrapper = styled.div`
  .top {
    height: 30px;
    background-color: #c20c0c;
    border-bottom: 1px solid #a40011;
  }
`;

export const TopMenu = styled.div`
  display: flex;
  padding-left: 180px;
  position: relative;

  .item {
    margin-top: 2px;
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

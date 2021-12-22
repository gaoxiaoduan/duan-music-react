import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 35px;
  border-bottom: 2px solid #c10d0c;
  padding: 0 10px 4px 34px;
  background-position: -225px -156px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    height: 35px;
    align-items: center;

    .title {
      font-size: 20px;
      font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
    }

    .keyword {
      display: flex;
      margin: 4px 0 0 20px;

      .item {
        .link {
          line-height: 17px;
          color: #666;
          font-size: 12px;
        }
        .divider {
          margin: 0 10px;
          color: #ccc;
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    margin-top: 6px;
    a {
      color: #666;
    }
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`;

import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  height: 41px;
  line-height: 41px;
  background: url(${require('@/assets/img/playpanel_bg.png')}) 0 0;
`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 553px;
  padding: 0 15px 0 25px;

  h3 {
    color: #e2e2e2;
    font-weight: 700;
  }

  .operator {
    color: #ccc;

    button {
      background-color: transparent;
      color: #ccc;
    }

    .icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      position: relative;
      top: 4px;
      right: 4px;
    }
    .favorWrapper {
      .favor {
        background-position: -24px 0;
      }
      &:hover {
        color: #e2e2e2;
        .favor {
          background-position: -24px -20px;
        }
      }
    }

    .removeWrapper {
      .remove {
        margin-left: -10px;
        width: 13px;
        background-position: -51px 0;
      }
      &:hover {
        color: #e2e2e2;
        .remove {
          background-position: -51px -20px;
        }
      }
    }

    .line {
      margin: 0 25px 0 10px;
      height: 15px;
      border-left: 1px solid #000;
      border-right: 1px solid #2c2c2c;
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  width: 432px;

  .title {
    flex: 1;
    text-align: center;
    color: #fff;
    font-size: 14px;
  }

  .empty,
  .closeButton {
    width: 30px;
  }

  .closeButton {
    margin-top: 6px;
    height: 30px;
    text-indent: -9999px;
    background-position: -195px 9px;
    &:hover {
      background-position: -195px -21px;
      cursor: pointer;
    }
  }
`;

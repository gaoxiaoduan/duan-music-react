import styled from 'styled-components';

export const SongsHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 42px;
  border-bottom: 2px solid #c20c0c;
  line-height: 33px;
`;

export const SongsHeaderLeft = styled.div`
  display: flex;

  .title {
    display: inline-block;
    font-size: 24px;
    color: #333;
  }

  .select {
    margin: 2px 0 0 12px;
    width: 91px;
    height: 31px;
    background-position: right -100px;
    cursor: pointer;
    &:hover {
      background-position: right -182px;
    }

    & > div {
      padding-left: 15px;
      height: 31px;
      width: 88px;
      line-height: 31px;
      color: #0c73c2;
      background-position: 0 -59px;
      &:hover {
        background-position: 0 -141px;
      }

      & > i {
        display: inline-block;
        margin-left: 2px;
        width: 8px;
        height: 6px;
        background-position: -70px -543px;
      }
    }
  }
`;

export const SongsHeaderRight = styled.div`
  .hot {
    width: 46px;
    height: 29px;
    text-align: center;
    line-height: 29px;
    background-position: 0 0;
    border-radius: 3px;
    color: white;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

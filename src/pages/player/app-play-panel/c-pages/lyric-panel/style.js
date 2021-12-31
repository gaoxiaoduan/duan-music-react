import styled from 'styled-components';

export const LyricWrapper = styled.div`
  width: 420px;
  height: 260px;
  overflow: hidden;
  .listlyric {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 21px 0 20px 0;
    width: 420px;
    height: 219px;
    overflow-y: auto;
    overflow-x: hidden;
    /* background-color: white; */

    // 滚动条样式
    &::-webkit-scrollbar {
      width: 7px;
      /* background: #000; */
      background: #121212;
      opacity: 0.5;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: #868686;
      border: 1px solid #a6a6a6;
      box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
      opacity: 0.8;
    }

    .listlyric-item {
      width: 354px;
      height: auto;
      min-height: 32px;
      line-height: 32px;
      color: #989898;
      word-wrap: break-word;
      text-align: center;
      transition: color 0.7s linear;
      /* background-color: #f1f1f1; */
    }

    .active {
      color: #fff;
      font-size: 14px;
      transition: color 0.7s linear;
    }
  }
`;

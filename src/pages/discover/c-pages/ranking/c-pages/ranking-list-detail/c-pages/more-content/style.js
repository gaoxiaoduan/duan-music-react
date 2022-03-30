import styled from 'styled-components';

export const MoreContentWrapper = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: -10px;

  .text {
    font-size: 13px;
    color: #333333;
  }

  .download {
    width: 120px;
    height: 30px;
    background-image: linear-gradient(90deg, #ff5a4c 0%, #ff1d12 100%);
    border-radius: 18px;
    line-height: 30px;
    font-size: 12px;
    color: #ffffff;
    text-align: center;

    &:hover {
      text-decoration: none;
    }
  }
`;

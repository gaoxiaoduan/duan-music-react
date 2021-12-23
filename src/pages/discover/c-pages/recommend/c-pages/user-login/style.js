import styled from 'styled-components';

export const UserLoginWrapper = styled.div`
  width: 250px;
  height: 126px;
  color: #666;
  .content {
    height: 126px;
    background-position: 0 0;

    p {
      width: 205px;
      margin: 0 auto;
      padding: 16px 0;
      line-height: 22px;
    }

    .login-btn {
      display: block;
      width: 100px;
      height: 31px;
      line-height: 31px;
      text-align: center;
      color: #fff;
      text-shadow: 0 1px 0 #8a060b;
      background-position: 0 -195px;
      &:hover {
        background-position: -110px -195px;
        text-decoration: none;
      }
    }
  }
`;

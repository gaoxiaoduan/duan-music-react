import styled from 'styled-components';

export const MineWrapper = styled.div``;

export const Content = styled.div`
  height: 700px;
  border: 1px solid #d3d3d3;
  border-style: none solid;
  background-color: #fff;

  .pic {
    position: relative;
    width: 902px;
    height: 458px;
    margin: 0 auto 0;
    padding-top: 70px;
    background-position: 0 70px;

    .login {
      position: absolute;
      bottom: 80px;
      right: 210px;
      width: 157px;
      height: 48px;

      &:hover {
        background-position: 0 -430px;
        cursor: pointer;
      }
    }
  }
`;

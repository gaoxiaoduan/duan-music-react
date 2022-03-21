import styled from 'styled-components';

export const MineWrapper = styled.div``;

export const Content = styled.div`
  height: 700px;
  border: 1px solid #d3d3d3;
  border-style: none solid;
  background-color: #fff;

  .pic {
    position: relative;
    width: 807px;
    height: 372px;
    margin: 0 auto 0;
    padding-top: 104px;
    background-position: 0 104px;
    .login {
      position: absolute;
      bottom: 21px;
      right: 158px;
      width: 167px;
      height: 45px;
      &:hover {
        background-position: 0 -278px;
        cursor: pointer;
      }
    }
  }
`;

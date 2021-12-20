import styled from 'styled-components';

export const HeaderWrapperStyles = styled.div`
  height: 75px;
  font-size: 14px;
  background-color: #242424;

  .content {
    display: flex;
    justify-content: space-between;
  }

  .bar {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  .logo {
    display: block;
    width: 176px;
    height: 70px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .select-list {
    display: flex;

    .select-item {
      position: relative;
      height: 70px;
      & > a {
        display: block;
        /* width: 94px; */
        padding: 0 19px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        text-decoration: none;

        &:hover {
          background-color: #000;
        }

        &.active {
          background-color: #000;
        }
      }

      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: '';
          width: 28px;
          height: 19px;
          background-image: url(${require('@/assets/img/sprite_01.png')});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      .icon {
        display: none;
      }

      .active .icon {
        position: absolute;
        display: block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0px;
        overflow: hidden;
      }
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    &:hover {
      cursor: pointer;
      color: #fff;
      border: 1px solid #fff;
    }
  }

  .login {
    color: #787878;
    padding-right: 22px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

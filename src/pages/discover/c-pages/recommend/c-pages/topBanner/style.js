import styled from 'styled-components';

export const BannerWrapper = styled.div`
  background: url(${(props) => props.bgImage}) center center/6000px;

  .banner {
    height: 285px;
    /* background-color: red; */

    display: flex;
    position: relative;
  }
`;

export const BannerLeft = styled.div`
  width: 730px;

  /* 红色dots */
  .redDots {
    & > li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      &.slick-active {
        width: 20px;
        & > button {
          background-color: #b90b0b;
        }
      }
      button {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        &:hover {
          background-color: #b90b0b;
        }
      }
    }
  }

  .banner-item {
    overflow: hidden;
    height: 285px;
    .image {
      width: 100%;
      height: 100%;
    }
  }
`;

export const BannerRight = styled.div`
  position: absolute;
  top: 0;
  right: -1px;
  z-index: 20;
  width: 254px;
  height: 285px;
  background: url(${require('@/assets/img/download.png')});

  .download {
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    text-indent: -9999px;
    background: url(${require('@/assets/img/download.png')});
    background-position: -19px -186px;
    &:hover {
      background-position: 0 -290px;
    }
  }

  p {
    margin: 10px auto;
    text-align: center;
    color: #8d8d8d;
  }

  .shadow {
    display: block;
    position: absolute;
    top: 0;
    left: -20px;
    width: 20px;
    height: 285px;
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    background-position: 0 9999px;
    background-repeat: no-repeat;

    &.left {
      background-position: -1px 0;
    }
    &.right {
      left: auto;
      right: -20px;
      background-position: -20px 0;
    }
  }
`;

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    background-color: transparent;
    cursor: pointer;
    margin-top: -32px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`;

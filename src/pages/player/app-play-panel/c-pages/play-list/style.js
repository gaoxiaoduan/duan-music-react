import styled from 'styled-components';

export const PlayListWrapper = styled.div`
  width: 558px;
  height: 260px;
  background-color: #121212;
  overflow: hidden;

  .list {
    width: 558px;
    height: 260px;
    overflow-y: auto;
    overflow-x: hidden;
    color: #ccc;
    // 滚动条样式
    &::-webkit-scrollbar {
      width: 7px;
      background: #000;
      opacity: 0.5;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: #868686;
      border: 1px solid #a6a6a6;
      box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
      opacity: 0.8;
    }

    .listItem {
      display: flex;
      height: 28px;
      line-height: 28px;

      .currentPlay {
        padding-left: 10px;
        width: 10px;

        .playicn {
          visibility: hidden;
          display: inline-block;
          margin-top: 8px;
          width: 10px;
          height: 13px;
          background-position: -182px 0;
        }
      }

      .songName {
        display: inline-block;
        padding-left: 20px;
        width: 256px;
      }

      .icns {
        visibility: hidden;
        padding-left: 10px;
        width: 110px;
        .icon {
          display: inline-block;
          margin: 7px 0 0 10px;
          width: 16px;
          height: 16px;
        }
        .ico-add {
          background-position: -24px 0;
          &:hover {
            background-position: -24px -20px;
          }
        }
        .ico-share {
          width: 14px;
          background-position: 0 0;
          &:hover {
            background-position: 0 -20px;
          }
        }
        .ico-dl {
          width: 14px;
          background-position: -57px -50px;
          &:hover {
            background-position: -80px -50px;
          }
        }
        .icn-del {
          width: 13px;
          background-position: -51px 0;
          &:hover {
            background-position: -51px -20px;
          }
        }
      }

      .author {
        padding-left: 10px;
        width: 80px;
        a {
          color: #ccc;
        }
      }

      .duration {
        padding-left: 10px;
        width: 45px;
      }

      .src {
        padding-left: 10px;
        width: 43px;
        .link {
          margin: 7px 8px 0 0;
          float: right;
          width: 14px;
          height: 16px;
          background-position: -80px 0px;
          &:hover {
            background-position: -80px -20px;
          }
        }
      }

      &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.4);
        color: #fff;
        .icns {
          display: inline-block;
          visibility: visible;
        }

        .author a {
          color: #fff;
        }
      }
    }

    // 激活效果
    .active {
      background-color: rgba(0, 0, 0, 0.4);
      color: #fff;

      .currentPlay {
        .playicn {
          visibility: visible;
        }
      }

      .author a {
        color: #fff;
      }

      .icns {
        visibility: visible;

        .ico-add {
          background-position: -24px -20px;
        }
        .ico-share {
          background-position: 0 -20px;
        }
        .ico-dl {
          background-position: -80px -50px;
        }
        .icn-del {
          background-position: -51px -20px;
        }
      }
    }
  }
`;

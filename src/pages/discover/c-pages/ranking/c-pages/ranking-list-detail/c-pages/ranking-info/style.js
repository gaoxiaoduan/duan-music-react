import styled from 'styled-components';

export const RankingInfoWrapper = styled.div`
  display: flex;
  padding: 40px;
  .cover {
    position: relative;
    padding: 3px;
    margin-right: 30px;
    width: 158px;
    height: 158px;
    border: 1px solid #ccc;

    .mask {
      position: absolute;
      background-position: -230px -380px;
      top: 3px;
      left: 3px;
      width: 150px;
      height: 150px;
    }
  }

  .cnt {
    .ranking_name {
      margin: 16px 0 4px;
      line-height: 24px;
      font-size: 20px;
      font-weight: normal;
      color: #333;
    }

    .time_info {
      margin: 0 0 20px;
      line-height: 35px;
      .icon {
        display: inline-block;
        margin-right: 5px;
        width: 13px;
        height: 13px;
        background-position: -18px -682px;
        vertical-align: middle;
      }
      .updateDate,
      .updateTime {
        line-height: 35px;
        color: #666;
        vertical-align: middle;
      }
      .updateTime {
        color: #999;
      }
    }

    .btns {
      .btn {
        display: inline-block;
        margin-right: 5px;
        padding: 0 5px 0 0;
        height: 30px;
        line-height: 30px;
        min-width: 23px;
        background-position: right -1020px;
        cursor: pointer;
        i {
          display: inline-block;
          padding-right: 2px;
          padding-left: 28px;
        }
        &:hover {
          background-position: right -1106px;
        }
      }

      /* 播放 */
      .play {
        margin-right: 0px;
        background-position: right -428px;
        i {
          padding: 0 7px 0 8px;
          background-position: 0 -387px;
          color: #fff;
          .play_icon {
            float: left;
            width: 20px;
            height: 18px;
            margin: 6px 2px 2px 0;
            background-position: 0 -1622px;
            overflow: hidden;
          }
        }

        &:hover {
          background-position: right -510px;
          i {
            background-position: 0 -469px;
            .play_icon {
              background-position: -28px -1622px;
            }
          }
        }
      }

      /* 添加 */
      .add {
        margin-right: 5px;
        width: 31px;
        margin-left: -3px;
        padding-right: 0;
        background-position: 0 -1588px;
        &:hover {
          background-position: -40px -1588px;
        }
      }

      .collection {
        i {
          background-position: 0 -977px;
        }
        &:hover > i {
          background-position: 0 -1063px;
        }
      }

      .share {
        i {
          background-position: 0 -1225px;
        }
        &:hover > i {
          background-position: 0 -1268px;
        }
      }

      .download {
        i {
          background-position: 0 -2761px;
        }
        &:hover > i {
          background-position: 0 -2805px;
        }
      }

      .comment {
        i {
          background-position: 0 -1465px;
        }
        &:hover > i {
          background-position: 0 -1508px;
        }
      }
    }
  }
`;

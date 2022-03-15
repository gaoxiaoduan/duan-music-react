import styled from 'styled-components';

export const SongsCategoryWapper = styled.div`
  position: absolute;
  top: 37px;
  left: -34px;
  z-index: 5;
  margin: 10px;
  padding-top: 10px;
  width: 700px;
  border: 1px solid #ccc;
  background-color: #fefefe;
  box-shadow: 0 0 10px 2px #d3d3d3;
  border-radius: 5px;

  .arrow {
    position: absolute;
    top: -11px;
    left: 113px;
    width: 24px;
    height: 11px;
    background-position: -48px 0;
  }

  .songs_category_header {
    height: 40px;
    padding-left: 26px;
    border-bottom: 1px solid #e6e6e6;
    font-weight: normal;

    .all_btn {
      color: #333;
      display: inline-block;
      width: 75px;
      height: 26px;
      line-height: 26px;
      text-align: center;
      background-position: 0 -64px;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  .songs_category_body {
    .line {
      display: flex;
      &:last-child {
        .line_content {
          padding-bottom: 25px;
        }
      }

      .line_title {
        display: flex;
        justify-content: center;
        padding-top: 10px;
        min-width: 97px;
        border-right: 1px solid #e6e6e6;

        .icon {
          margin: 3px 8px 0 0;
          display: inline-block;
          width: 24px;
          height: 24px;
          background-position: -20px -735px;
        }

        span {
          display: inline-block;
          font-size: 12px;
          font-weight: bold;
        }
      }

      .line_content {
        max-width: 578px;
        padding: 14px 15px 0 15px;
        line-height: 24px;
        white-space: wrap;
        span {
          color: #333;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
        .active {
          background: #a7a7a7;
          color: #fff;
          padding: 2px 6px;
        }

        .divider {
          margin: 0 8px 0 10px;
          color: #d8d8d8;
        }
      }

      &:nth-child(2) {
        .line_title {
          .icon {
            background-position: 0 -60px;
          }
        }
      }

      &:nth-child(3) {
        .line_title {
          .icon {
            background-position: 0 -88px;
          }
        }
      }

      &:nth-child(4) {
        .line_title {
          .icon {
            background-position: 0 -117px;
          }
        }
      }

      &:nth-child(5) {
        .line_title {
          .icon {
            background-position: 0 -141px;
          }
        }
      }
    }
  }
`;

import styled from 'styled-components';

export const RankingTableWrapper = styled.div`
  padding: 0 30px 40px 40px;
`;

export const RankingTitltWrapper = styled.div`
  height: 33px;
  border-bottom: 2px solid #c20c0c;
  .title {
    display: inline-block;
    line-height: 28px;
    font-size: 20px;
    font-weight: 400;
    color: #333;
    font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
  }

  .song_count {
    margin: 0 0 0 20px;
    color: #666;
  }

  .more {
    float: right;
    margin-top: 5px;
    color: #666;
    .play_count {
      color: #c20c0c;
    }
  }
`;

export const RankingTableCntWrapper = styled.div`
  .ranking_table {
    width: 100%;
    border: 1px solid #d9d9d9;
    thead {
      th {
        height: 38px;
        background-color: #f7f7f7;
        background-position: 0 0;
        background-repeat: repeat-x;
        vertical-align: top;
        text-align: left;
        font-weight: normal;
        color: #666;
        .w_title {
          line-height: 18px;
          padding: 8px 10px;
          background-position: 0 -56px;
        }
      }
      .w1 {
        width: 77px;
        min-width: 77px;
      }
      .w2 {
        max-width: 321px;
      }
      .w3 {
        width: 91px;
        min-width: 91px;
      }
      .w4 {
        width: 160px;
        min-width: 160px;
        overflow: hidden;
      }
    }

    tbody {
      .m_tr {
        td {
          padding: 6px 10px;
          line-height: 18px;
          text-align: left;
          .w_rank {
            height: 18px;

            .num {
              float: left;
              width: 25px;
              margin-left: 0;
              text-align: center;
              color: #999;
            }

            .rk {
              float: right;
              width: 32px;
              margin-right: -5px;
              text-align: center;
              .icon_new {
                display: block;
                margin: 0 auto;
                width: 16px;
                height: 17px;
                background-position: -67px -283px;
              }
            }
          }

          .w_name {
            width: 100%;
            overflow: hidden;

            .text {
              position: relative;
              width: 282px;
              min-width: 282px;
              max-width: 282px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .pic {
              float: left;
              width: 50px;
              height: 50px;
              margin-right: 14px;
            }

            .paly_btn {
              float: left;
              margin-right: 8px;
              width: 17px;
              height: 17px;
              cursor: pointer;
              background-position: 0 -103px;
              &:hover {
                background-position: 0 -128px;
              }
            }

            a {
              color: #333;
            }

            .alia {
              color: #aeaeae;
            }
          }

          .w_singer {
            width: 151px;
            a {
              color: #333;
            }
          }

          .opt_btn {
            display: none;
            position: relative;
            left: -5px;
            margin-right: -12px;
            background-color: #f1f1f1;

            .icon {
              float: left;
              width: 18px;
              height: 16px;
              margin: 2px 0 0 4px;
              overflow: hidden;
              text-indent: -999px;
              cursor: pointer;
            }

            .icon_add {
              width: 13px;
              height: 13px;
              background-position: 0 -700px;
              &:hover {
                background-position: -22px -700px;
              }
            }

            .icon_fav {
              background-position: 0 -174px;
              &:hover {
                background-position: -20px -174px;
              }
            }

            .icon_share {
              background-position: 0 -195px;
              &:hover {
                background-position: -20px -195px;
              }
            }

            .icon_download {
              background-position: -81px -174px;
              &:hover {
                background-position: -104px -174px;
              }
            }
          }
        }

        &:hover .opt_btn {
          display: block;
        }

        &:hover .w_time {
          display: none;
        }

        &:nth-child(odd) {
          background-color: #f7f7f7;
        }

        /* 设置前三行样式 */
        &:nth-child(-n + 3) {
          .w_name {
            height: 50px;
            line-height: 50px;
            overflow: hidden;
            .text {
              position: relative;
              width: 220px;
              min-width: 220px;
              max-width: 220px;
            }
          }
          .paly_btn {
            margin-top: 17px;
          }
        }
      }
    }
  }
`;

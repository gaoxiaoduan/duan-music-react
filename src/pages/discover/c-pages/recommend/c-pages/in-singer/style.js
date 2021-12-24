import styled from 'styled-components';

export const InSingerWrapper = styled.div`
  margin: 15px 20px 0;

  .singer-list {
    .singer-list-item {
      margin-top: 14px;
      width: 210px;
      height: 62px;
      background: #fafafa;
      a {
        display: flex;
        justify-content: space-between;
        text-decoration: none;
        &:hover {
          background: #f4f4f4;
        }
        .head {
          width: 62px;
          height: 62px;
        }

        .info {
          padding-left: 14px;
          width: 148px;
          height: 60px;
          border: 1px solid #e9e9e9;
          border-left: none;
          h4 {
            margin-top: 8px;
            font-size: 14px;
            color: #333;
            font-weight: bold;
          }
          p {
            margin-top: 8px;
            color: #666;
          }
        }
      }
    }
  }

  .apply-btn {
    margin-top: 20px;
    a {
      display: inline-block;
      padding-right: 5px;
      width: 205px;
      height: 31px;
      line-height: 31px;
      vertical-align: top;
      text-align: center;
      overflow: hidden;
      text-decoration: none;
      background-color: #f8f8f8;
      border: 1px solid #c3c3c3;
      border-radius: 5px;

      &:hover {
        background-color: #fefefe;
      }

      i {
        padding: 0 15px 0 20px;
        width: 170px;
        color: #333;
        font-weight: bold;
      }
    }
  }
`;

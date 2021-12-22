import styled from 'styled-components';

export const AlbumWrapper = styled.div`
  margin-top: 40px;
  .content {
    margin: 20px 0px 37px;
    height: 186px;
    border: 1px solid rgb(211, 211, 211);

    .inner {
      display: flex;
      align-items: center;
      height: 184px;
      background: rgb(245, 245, 245);
      border: 1px solid rgb(255, 255, 255);

      .arrow {
        margin-top: -30px;
        width: 25px;
        height: 17px;
        cursor: pointer;
      }

      .arrow-left {
        background-position: -260px -75px;
        &:hover {
          background-position: -280px -75px;
        }
      }

      .arrow-right {
        background-position: -300px -75px;
        &:hover {
          background-position: -320px -75px;
        }
      }

      .album {
        width: 640px;
        height: 150px;

        .ant-carousel .slick-slide {
          height: 150px;
          overflow: hidden;
        }

        .page {
          display: flex !important;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }
`;

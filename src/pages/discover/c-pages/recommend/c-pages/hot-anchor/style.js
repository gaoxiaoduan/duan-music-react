import styled from 'styled-components';

export const HotAnchorWrapper = styled.div`
  margin: 30px 20px 0;

  .hot-anchor-list {
    margin-top: 20px;

    .hot-anchor-list-item {
      display: flex;
      width: 210px;
      height: 50px;

      a {
        width: 40px;
        margin-right: 10px;
      }

      .info {
        width: 160px;
        line-height: 21px;
        color: #666;
        .name {
          a {
            color: #000;
          }
        }
      }
    }
  }
`;

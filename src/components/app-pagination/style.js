import styled from 'styled-components';

export const AppPaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  .pagination {
    margin: 30px 0;
    text-align: center;

    .ant-pagination-item {
      border: 1px solid #ccc !important;
      margin: 0 5px;
      border-radius: 3px;

      a {
        font-size: 12px;
      }

      &.ant-pagination-item-active {
        background-color: #c20c0c;
        border-color: #a2161b;
        a {
          color: #fff;
        }
      }

      &:hover {
        border-color: #666 !important;
        a {
          color: #666 !important;
        }
      }
    }
  }

  .control {
    font-size: '12px';
    line-height: '24px';

    .anticon,
    .anticon + span {
      margin: 0 !important;
    }

    &.prev {
      margin-right: 10px;
    }

    &.next {
      margin-left: 10px;
    }
  }
`;

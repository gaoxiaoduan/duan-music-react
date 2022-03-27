import styled from 'styled-components';

export const RankingListWrapper = styled.div`
  width: 240px;
  border-right: 1px solid #d3d3d3;
  background-color: #f9f9f9;

  .mini_title {
    padding: 0 10px 12px 15px;
    font-size: 14px;
    color: #000;
  }

  .rankingItem {
    display: flex;
    padding: 10px 0 10px 20px;

    .left_img {
      margin-right: 10px;
      width: 40px;
      height: 40px;
    }

    .right_description {
      .name {
        width: 150px;
        overflow: hidden;
        margin-bottom: 5px;
        color: #000;
      }
      .updateFrequency {
        color: #999;
      }
    }

    &:hover {
      cursor: pointer;
      background-color: #f4f2f2;
    }

    // 选中样式
    &.active {
      background-color: #e6e6e6;
    }
  }
`;

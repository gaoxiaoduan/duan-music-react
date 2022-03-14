import styled from 'styled-components';

export const RecommendWrapper = styled.div`
  .recommend-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
    height: 438px;
    & > li {
      margin-bottom: 30px;
    }
  }
`;

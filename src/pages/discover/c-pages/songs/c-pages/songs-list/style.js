import styled from 'styled-components';

export const SongsListWrapper = styled.div`
  .song-list {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & > li {
      margin: 0 50px 30px 0;
    }

    & > li:nth-child(5n) {
      margin-right: 0;
    }
  }
`;

import styled from 'styled-components';

export const AlbumWrapper = styled.div`
  width: ${(props) => props.width};
  background-position: -260px 108px;

  .album-image {
    margin: 8px 0 7px 0;
    position: relative;
    width: ${(props) => props.width};
    height: ${(props) => props.size};
    overflow: hidden;

    &:hover {
      // TODO: hover时出现播放按钮，然后将歌曲添加进播放列表中
    }

    img {
      width: ${(props) => props.size};
      height: ${(props) => props.size};
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${(props) => props.bgp};
      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 12px;
    width: ${(props) => props.size};
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }

    .artist {
      color: #666;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getSongListAction } from '../../store/actionCreators';

import SongsCover from '@/components/songs-cover';
import { SongsListWrapper } from './style';

export default memo(function SongsList() {
  const dispatch = useDispatch();
  const { songCategoryList } = useSelector(
    (state) => ({
      songCategoryList: state.getIn(['songs', 'songCategoryList']),
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getSongListAction());
  }, []);

  return (
    <SongsListWrapper>
      <ul className="song-list">
        {songCategoryList.map((item) => {
          return (
            <li key={item.id}>
              <SongsCover info={item} />
            </li>
          );
        })}
      </ul>
    </SongsListWrapper>
  );
});

import React, { memo, useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getSongListAction } from '../../store/actionCreators';
import { SONG_LIST_LIMIT } from '../../store/constants';

import SongsCover from '@/components/songs-cover';
import AppPagination from '@/components/app-pagination';
import { SongsListWrapper } from './style';

const defaultParams = {
  cat: '全部', // 类别
  limit: SONG_LIST_LIMIT, // 取出歌单数量 , 默认为 50
  offset: 0, // 偏移数量 , 用于分页 , 如: (评论页数 - 1) * 50, 其中 50 为 limit 的值
};

export default memo(function SongsList() {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const { songCategoryInfo } = useSelector(
    (state) => ({
      songCategoryInfo: state.getIn(['songs', 'songCategoryInfo']),
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getSongListAction(defaultParams));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [songCategoryInfo && songCategoryInfo?.cat]);

  const onChange = (page) => {
    let newParams = {
      ...defaultParams,
      offset: (page - 1) * defaultParams.limit,
    };
    dispatch(getSongListAction(newParams));
    setCurrentPage(page);
  };

  return (
    <SongsListWrapper>
      <ul className="song-list">
        {songCategoryInfo.playlists?.map((item) => {
          return (
            <li key={item.id}>
              <SongsCover info={item} />
            </li>
          );
        })}
      </ul>

      {/* 分页 */}
      <AppPagination
        current={currentPage}
        total={songCategoryInfo.total || 0}
        pageSize={defaultParams.limit || 50}
        showSizeChanger={false}
        onChange={onChange}
      />
    </SongsListWrapper>
  );
});

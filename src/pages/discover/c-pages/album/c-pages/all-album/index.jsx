import React, { memo, useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getAllAlbumsAction } from '../../store/actionCreators';

import AlbumCover from '@/components/album-cover';
import ThemeHeaderRCM from '@/components/theme-header-rcm';
import AppPagination from '@/components/app-pagination';
import { Content } from './style';

const defaultParams = {
  limit: 35,
  offset: 0,
  area: 'ALl',
};

// 若使用的是ts就可以使用enum啦。。。
// 这里就使用map存储
const keywordsMap = new Map([
  ['全部', 'ALL'],
  ['华语', 'ZH'],
  ['欧美', 'EA'],
  ['韩国', 'KR'],
  ['日本', 'JP'],
]);

const AllAlbum = memo(() => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const { allAlbums, allAlbumsTotal } = useSelector(
    (state) => ({
      allAlbums: state.getIn(['album', 'allAlbums']),
      allAlbumsTotal: state.getIn(['album', 'allAlbumsTotal']),
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getAllAlbumsAction(defaultParams));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [defaultParams.area]);

  const onChange = (page) => {
    let newParams = {
      ...defaultParams,
      offset: (page - 1) * defaultParams.limit,
    };
    dispatch(getAllAlbumsAction(newParams));
    setCurrentPage(page);
  };

  const handleKeywordClick = useCallback((keyword) => {
    defaultParams.area = keywordsMap.get(keyword);
    defaultParams.offset = (currentPage - 1) * defaultParams.limit;
    dispatch(getAllAlbumsAction(defaultParams));
  }, []);

  return (
    <div>
      <ThemeHeaderRCM
        title="全部新碟"
        keywords={['全部', '华语', '欧美', '韩国', '日本']}
        showTitleDot={false}
        keywordClick={handleKeywordClick}
      />

      <Content>
        {allAlbums.map((item) => (
          <AlbumCover key={item.id} info={item} width="153px" size="130px" bgp="-845px" />
        ))}
      </Content>

      {/* 分页 */}
      <AppPagination
        current={currentPage}
        total={allAlbumsTotal || 0}
        pageSize={defaultParams.limit || 50}
        showSizeChanger={false}
        onChange={onChange}
      />
    </div>
  );
});

export default AllAlbum;

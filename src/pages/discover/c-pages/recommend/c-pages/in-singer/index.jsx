import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArtistListAction } from '../../store/actionCreators';

import { getSizeImage } from '@/utils/format-utils';
import ThemeHeaderSmall from '@/components/theme-header-small';
import { InSingerWrapper } from './style';

export default memo(function InSinger() {
  const dispatch = useDispatch();
  const { artistList } = useSelector((store) => ({
    artistList: store.getIn(['recommend', 'artistList']),
  }));
  useEffect(() => {
    dispatch(getArtistListAction(5));
  }, [dispatch]);

  return (
    <InSingerWrapper>
      <ThemeHeaderSmall title="入驻歌手" more="查看全部 &gt;" to="todo" />

      <ul className="singer-list">
        {artistList.map((item) => {
          return (
            <li className="singer-list-item" key={item.id}>
              <a href="todo">
                <div className="head">
                  <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
                </div>
                <div className="info">
                  <h4 className="text-nowrap">{item.name || ''}</h4>
                  <p className="text-nowrap">{item.alias.join('') || item.name || ''}</p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>

      <div className="apply-btn">
        <a href="https://music.163.com/st/musician" target="_blank">
          <i>申请成为网易音乐人</i>
        </a>
      </div>
    </InSingerWrapper>
  );
});

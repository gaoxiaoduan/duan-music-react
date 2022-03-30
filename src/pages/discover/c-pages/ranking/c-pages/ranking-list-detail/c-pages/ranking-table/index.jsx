import React, { memo, useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { changePlayerSongAction } from '@/pages/player/store';
import { Link } from 'react-router-dom';

import MoreContent from '../more-content';
import { formatMinuteSecond, getSizeImage } from '@/utils/format-utils';
import { appMessage } from '@/utils/message-utils';
import { RankingTableWrapper, RankingTitltWrapper, RankingTableCntWrapper } from './style';

const RankingTable = memo(() => {
  const [rankingList, setRankingList] = useState([]); // 排行榜数据

  const dispatch = useDispatch();
  const { currentRankingDetail = {} } = useSelector(
    (store) => ({
      currentRankingDetail: store.getIn(['ranking', 'currentRankingDetail']),
    }),
    shallowEqual,
  );

  useEffect(() => {
    setRankingList(Object.freeze(currentRankingDetail.tracks || []));
  }, [currentRankingDetail]);

  const playMusic = (song) => {
    dispatch(changePlayerSongAction(song.id));
  };

  const handleClick = (item) => {
    appMessage({
      content: 888,
    });
  };

  return (
    <RankingTableWrapper>
      <RankingTitltWrapper>
        <h3 className="title">歌曲列表</h3>
        <span className="song_count">{currentRankingDetail.tracks?.length || 0}首歌</span>
        <div className="more">
          播放：
          <strong className="play_count">{currentRankingDetail.playCount || 0}</strong>次
        </div>
      </RankingTitltWrapper>

      <RankingTableCntWrapper>
        <table className="ranking_table">
          <thead>
            <tr>
              <th className="sprite_table w1" />
              <th className="sprite_table w2">
                <div className="sprite_table w_title">标题</div>
              </th>
              <th className="sprite_table w3">
                <div className="sprite_table w_title">时长</div>
              </th>
              <th className="sprite_table w4">
                <div className="sprite_table w_title">歌手</div>
              </th>
            </tr>
          </thead>

          <tbody>
            {rankingList.map((item, index) => {
              return (
                <tr key={item.id} className="m_tr">
                  <td>
                    <div className="w_rank">
                      <span className="num">{index + 1}</span>
                      <div className="rk">
                        <i className="icon_new sprite_icon2" />
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="w_name">
                      {index < 3 && (
                        <Link to="todo">
                          <img src={getSizeImage(item.al.picUrl, 50)} alt="" className="pic" />
                        </Link>
                      )}
                      <span className="paly_btn sprite_table" onClick={() => playMusic(item)} />
                      <div className="text">
                        <Link to="todo">{item.name}</Link>
                        {item.alia && item.alia.length > 0 && (
                          <span className="alia text-nowrap"> - ({item.alia[0]})</span>
                        )}
                        {!item.alia[0] && item.tns && item.tns.length > 0 && (
                          <span className="alia text-nowrap"> - ({item.tns[0]})</span>
                        )}
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="sprite_table w_time">{formatMinuteSecond(item.dt)}</div>
                    <div className="opt_btn">
                      <span className="sprite_icon2 icon icon_add" onClick={() => handleClick(item)} />
                      <span className="sprite_table icon icon_fav" onClick={() => handleClick(item)} />
                      <span className="sprite_table icon icon_share" onClick={() => handleClick(item)} />
                      <span className="sprite_table icon icon_download" onClick={() => handleClick(item)} />
                    </div>
                  </td>

                  <td>
                    <div className="w_singer text-nowrap">
                      {item.ar.length === 1 ? (
                        <Link to="todo" key={item.ar[0].name}>
                          {item.ar[0].name}
                        </Link>
                      ) : (
                        item.ar.map((arItem, index, i) => {
                          return index !== i.length - 1 ? (
                            <React.Fragment key={arItem.id}>
                              <Link to="todo" key={arItem.name}>
                                {arItem.name}
                              </Link>
                              <span> / </span>
                            </React.Fragment>
                          ) : (
                            <Link to="todo" key={arItem.name}>
                              {arItem.name}
                            </Link>
                          );
                        })
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {currentRankingDetail?.tracks?.length <= 50 && <MoreContent />}
      </RankingTableCntWrapper>
    </RankingTableWrapper>
  );
});

export default RankingTable;

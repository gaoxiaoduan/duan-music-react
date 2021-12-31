import { message } from 'antd';
import { getRandomNumber } from './math-utiles';

export const appMessage = (props) => {
  const { content = '', duration = 5 } = props;
  const contentList = ['攻城狮正在熬夜coding✨', '正在开发中,敬请期待🎁', '功能暂未开放📦', '嘿嘿嘿～马上就来🚀'];

  let cnt = '';
  let type = typeof content;
  if (type === 'string') {
    cnt = content;
  } else if (type === 'number') {
    cnt = contentList[content] || contentList[getRandomNumber(contentList.length)];
  }

  message.info(cnt, duration);
};

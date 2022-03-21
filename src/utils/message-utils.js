import { message } from 'antd';
import { getRandomNumber } from './math-utiles';

/**
 * 消息提示
 * @param {*} props
 * content: 如果content有内容，则message内容为content，
 * 若为数字会在contentList中选择一个，若contentList中不存在，则随机提示
 * duration: 延迟时间
 */
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

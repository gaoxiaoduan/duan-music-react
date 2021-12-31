/**
 *
 * @param {*} element 目标元素
 * @param {*} to 目标位置
 * @param {*} duration 达到目标位置花费时间
 * @returns
 */
export function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  // 距离差
  let difference = to - element.scrollTop;
  // (difference / duration)计算出，没秒应该走多少，然后再分成10次走完
  let perTick = (difference / duration) * 10;

  setTimeout(function () {
    element.scrollTop = element.scrollTop + perTick;
    // 到达目标
    if (element.scrollTop === to) return;
    // 递归调用，会出现缓慢的滚动效果
    scrollTo(element, to, duration - 10);
  }, 10);
}

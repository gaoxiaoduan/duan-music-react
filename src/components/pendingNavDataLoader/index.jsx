import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const PendingNavLoader = (props) => {
  useEffect(() => {
    window.NProgress.done(); // 进度条完成
    return () => {
      window.NProgress.start(); // 进度条开始
    };
  });

  return props.children;
};

export default withRouter(PendingNavLoader);

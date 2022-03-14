import React, { memo } from 'react';
import { Pagination, Button } from 'antd';
import { AppPaginationWrapper } from './style';

const buttonStyle = {
  fontSize: '12px',
};
// 分页组件
export default memo(function AppPagination(props) {
  const { current = 1, total = 0, pageSize = 0, onChange = () => {} } = props;

  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return (
        <Button size="small" style={{ ...buttonStyle, marginRight: '10px' }}>
          上一页
        </Button>
      );
    }
    if (type === 'next') {
      return (
        <Button size="small" style={{ ...buttonStyle, marginLeft: '10px' }}>
          下一页
        </Button>
      );
    }
    return originalElement;
  };

  return (
    <AppPaginationWrapper>
      <Pagination
        size="small"
        current={current}
        total={total}
        pageSize={pageSize}
        showSizeChanger={false}
        onChange={onChange}
        itemRender={itemRender}
      />
    </AppPaginationWrapper>
  );
});

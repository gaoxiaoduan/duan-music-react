import React, { memo } from 'react';
import { Pagination, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { AppPaginationWrapper } from './style';

// 分页组件
export default memo(function AppPagination(props) {
  const { current = 1, total = 0, pageSize = 0, onChange = () => {} } = props;

  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return (
        <Button size="small" className="control prev">
          <LeftOutlined />上一页
        </Button>
      );
    }
    if (type === 'next') {
      return (
        <Button size="small" className="control next">
          下一页<RightOutlined />
        </Button>
      );
    }
    return originalElement;
  };

  return (
    <AppPaginationWrapper>
      <Pagination
        className="pagination"
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

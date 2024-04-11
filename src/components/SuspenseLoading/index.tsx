'use client';

import { Spin } from 'antd';
import { SpinWrapper } from './styled';

export default function SuspenseLoading() {
  return (
    <SpinWrapper>
      <Spin />
      <span>Đang tải, vui lòng đợi...</span>
    </SpinWrapper>
  );
}

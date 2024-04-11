'use client';

import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { Empty, notification } from 'antd';
import { ConfigProviderProps } from 'antd/es/config-provider';
import { useServerInsertedHTML } from 'next/navigation';

export const AntdStyleRegistry = ({ children }: { children: React.ReactNode }) => {
  const cache = createCache();
  useServerInsertedHTML(() => (
    <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
  ));
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

export const antdClientConfig: ConfigProviderProps = {
  renderEmpty: () => <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Không có dữ liệu" />,
};

notification.config({
  maxCount: 5,
  placement: 'topRight',
});

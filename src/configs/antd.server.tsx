import locale from 'antd/es/locale/vi_VN';
import { ConfigProviderProps } from 'antd/lib/config-provider';

export const antdServerConfig: ConfigProviderProps = {
  locale: locale,
  componentSize: 'large',
  form: { colon: false },
  space: { size: 12 },
  theme: { token: { colorPrimary: 'green' } },
};

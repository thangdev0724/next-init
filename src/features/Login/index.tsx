'use client';

import { App, Button, Form, Input, Space, Typography } from 'antd';
import { useRouter } from 'next/navigation';

import { ReloadOutlined } from '@ant-design/icons';
import moment from 'moment';
import Image from 'next/image';
import { PATHS } from '~/constants';
import tokenManager from '~/utils/tokenManager';
import { useLogin } from './services/Login.mutation';
import { useGetCAPTCHA } from './services/Login.query';
import { ILoginValues } from './services/Login.type';
import { CaptchaWrapper, ReloadCaptchaButton } from './styled';

/**
 * @page
 * @description Màn hình đăng nhập
 * @author thangld
 */
export default function Login() {
  const router = useRouter();
  const [form] = Form.useForm();
  const { notification } = App.useApp();

  const { data: { byteArray, time, guid } = {}, refetch: refetchCaptcha } = useGetCAPTCHA();

  const { mutate: login, isLoading } = useLogin();

  const handleSubmit = (values: ILoginValues) => {
    const expire = moment(time, 'DD/MM/YYYY HH:mm:ss').toDate().getTime();

    // Lớn hơn 2 phút
    if (new Date().getTime() - expire > 120000) {
      refetchCaptcha();
      notification.error({
        message: 'mã CAPTCHA đã hết hạn!',
      });
      return;
    }

    const payload = {
      ...values,
      captchaCode: values.captchaCode + guid,
    };

    console.log('payload: ', payload);

    login(payload, {
      onSuccess: (response) => {
        console.log('response: ', response);
        tokenManager.setAccessToken(response?.data?.accessToken);
        tokenManager.setRefreshToken(response?.data?.refreshToken);
        window.location.href = PATHS.HOME_PATH;
      },
      onError: (error: any) => {
        refetchCaptcha();
        const remaining: number = error?.data?.data;
        if (error?.data?.data !== undefined && error?.data?.data !== null) {
          form.setFields([
            {
              name: 'matKhau',
              errors: [`Mật khẩu không chính xác, còn ${remaining} lần thử!`],
            },
          ]);
        }
      },
    });
  };

  return (
    <div>
      <Typography.Title level={3}>Đăng nhập</Typography.Title>

      <Form form={form} onFinish={handleSubmit} style={{ width: '100%' }}>
        <Form.Item name="tenDangNhap">
          <Input placeholder="Tài khoản" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item name="matKhau">
          <Input.Password placeholder="Mật khẩu" style={{ width: '100%' }} />
        </Form.Item>

        <Space direction="vertical" style={{ width: '100%' }}>
          <CaptchaWrapper>
            <Form.Item name="captchaCode" style={{ marginBottom: 0, flex: 1 }}>
              <Input style={{ width: '100%' }} />
            </Form.Item>

            {byteArray && (
              <Image src={'data:image/png;base64, ' + byteArray} alt="" width={120} height={40} />
            )}

            <ReloadCaptchaButton
              type="link"
              shape="circle"
              icon={<ReloadOutlined style={{ color: 'var(--primary)' }} />}
              onClick={() => {
                refetchCaptcha();
                form.setFieldsValue({
                  captchaCode: undefined,
                });
              }}
            />
          </CaptchaWrapper>

          <Button htmlType="submit" type="primary" block loading={isLoading}>
            Đăng nhập
          </Button>
        </Space>
      </Form>
    </div>
  );
}

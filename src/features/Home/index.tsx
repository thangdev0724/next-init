'use client';

import { App, Button } from 'antd';
import { useRouter } from 'next/navigation';
import Counter from '~/components/Counter';
import { useLogout } from '../Login/services/Login.mutation';
import { PATHS } from '~/constants';
import tokenManager from '~/utils/tokenManager';

export default function Home() {
  const router = useRouter();

  const { notification } = App.useApp();

  const { mutate: logout } = useLogout();

  // useEffect(() => {
  // router.prefetch(PATHS.LOGIN_PATH);
  // }, [router]);

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        tokenManager.removeAccessToken();
        tokenManager.removeRefreshToken();
        router.push(PATHS.LOGIN_PATH);
      },
    });
  };

  return (
    <>
      <h1>home page</h1>
      <Counter />
      <Button type="primary" onClick={handleLogout}>
        Logout
      </Button>
    </>
  );
}

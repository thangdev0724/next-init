import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { COOKIES_KEYS, PATHS } from '~/constants';
import Login from '~/features/Login';

export interface ILoginProps {}

export default async function LoginPage(props: ILoginProps) {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIES_KEYS.REFRESH_TOKEN);

  if (token) redirect(PATHS.HOME_PATH);

  return <Login />;
}

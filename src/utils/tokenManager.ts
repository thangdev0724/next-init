import cookies from '~/configs/cookies';
import { COOKIES_KEYS } from '~/constants';
import { decryptDES, encryptDES } from './DES.encryt';

/**
 * @author thangld
 */
const tokenManager = () => {
  let accessToken: string | undefined = cookies.get(COOKIES_KEYS.ACCESS_TOKEN);
  let refreshToken: string | undefined = cookies.get(COOKIES_KEYS.REFRESH_TOKEN);

  const getAccessToken = (): string | undefined => {
    if (!accessToken) return undefined;
    try {
      return decryptDES(accessToken, process.env.REACT_APP_DES_ENCRYPT_KEY as string);
    } catch {
      return undefined;
    }
  };

  const setAccessToken = (token: string): void => {
    accessToken = encryptDES(token, process.env.REACT_APP_DES_ENCRYPT_KEY as string);
    cookies.set(COOKIES_KEYS.ACCESS_TOKEN, accessToken);
  };

  const removeAccessToken = (): void => {
    accessToken = undefined;
    cookies.remove(COOKIES_KEYS.ACCESS_TOKEN);
  };

  const getRefreshToken = () => {
    if (!refreshToken) return undefined;
    try {
      return decryptDES(refreshToken, process.env.REACT_APP_DES_ENCRYPT_KEY as string);
    } catch {
      return undefined;
    }
  };

  const setRefreshToken = (token: string): void => {
    refreshToken = encryptDES(token, process.env.REACT_APP_DES_ENCRYPT_KEY as string);
    cookies.set(COOKIES_KEYS.REFRESH_TOKEN, refreshToken);
  };

  const removeRefreshToken = (): void => {
    refreshToken = undefined;
    cookies.remove(COOKIES_KEYS.REFRESH_TOKEN);
  };

  return {
    getAccessToken,
    setAccessToken,
    removeAccessToken,
    getRefreshToken,
    setRefreshToken,
    removeRefreshToken,
  };
};

export default tokenManager();

import { useMutation } from '@tanstack/react-query';
import { login, logout } from './Login.api';

export const useLogin = () => {
  return useMutation(login, {
    onSuccess: (response) => {
      console.log('login: ', response);
    },
  });
};

export const useLogout = () => {
  return useMutation(logout, {
    onSuccess: (response) => {
      console.log('logout: ', response);
    },
  });
};

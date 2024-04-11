export interface IGetCaptchaParams {
  width?: number;
  height?: number;
}

export interface IGetCaptchaResponse {
  byteArray: string;
  time: string;
  guid: string;
}

export interface ILoginValues {
  tenDangNhap: string;
  matKhau: string;
  captchaCode: string;
}

export interface ILoginResponse {
  accessToken: string;
  expiration: string;
  refreshToken: string;
}

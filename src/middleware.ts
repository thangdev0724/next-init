import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { COOKIES_KEYS, PATHS } from './constants';

/**
 * @author thangld
 */
export function middleware(request: NextRequest) {
  // const allCookies = request.cookies.getAll();

  console.log('request.url: ', request.url);
  // console.log('allCookies: ', allCookies);

  const token = request.cookies.get(COOKIES_KEYS.ACCESS_TOKEN);

  // console.log('token: ', token);

  if (!token) return NextResponse.redirect(new URL(PATHS.LOGIN_PATH, request.url));
  else {
  }

  return NextResponse.next();
}

export const config = {
  //exclude path
  matcher: ['/((?!login|_next).*)'],
};

export const REST_API_KEY = process.env.REACT_APP_REST_API_KEY as string;
export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI as string;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET as string;
export const KAKAO_APP_KEY = process.env.REACT_APP_KAKAO_APP_KEY as string;

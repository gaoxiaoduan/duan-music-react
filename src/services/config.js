const devBaseURL = 'https://netease-cloud-music-api-4-2-0.vercel.app/';
const proBaseURL = 'https://netease-cloud-music-api-4-2-0.vercel.app/';
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;

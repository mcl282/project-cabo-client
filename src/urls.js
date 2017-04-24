export let ROOT_URL = '';
(process.env.NODE_ENV==='production') ? ROOT_URL = 'https://cabo-server.herokuapp.com' : ROOT_URL = 'https://project-cabo-mcl282.c9users.io';

export const ROOT_URL_API_VERSION ='v1';

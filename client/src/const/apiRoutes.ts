const BASE_API_URL = 'http://localhost:3000/api/v1'

const LOGIN_API_URL =BASE_API_URL+'/user/login';
const REGISTER_API_URL=BASE_API_URL+'/user/register'

const CORS_HEADERS={
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
}
export {
   BASE_API_URL,
   LOGIN_API_URL,
   REGISTER_API_URL,
   CORS_HEADERS

}
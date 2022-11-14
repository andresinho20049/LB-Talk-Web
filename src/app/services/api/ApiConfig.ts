import axios from 'axios'
import { errorInterceptor, RequestInterceptor, responseInterceptor } from './interceptors';


export const configBase = {
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AUTHORIZATION_TOKEN}`
    }
};

const ApiForm = axios.create(configBase);

ApiForm.interceptors.response.use(
    (res) => responseInterceptor(res),
    (error) => errorInterceptor(error)
)

ApiForm.interceptors.request.use(
    (req) => RequestInterceptor(req)
)

export { 
    ApiForm
};
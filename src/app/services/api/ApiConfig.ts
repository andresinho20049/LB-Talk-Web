import axios from 'axios'
import { errorInterceptor, RequestInterceptor, responseInterceptor } from './interceptors';

//@ts-ignore
import { REACT_APP_BASE_URL, REACT_APP_AUTHORIZATION_TOKEN } from 'react-native-dotenv';

export const configBase = {
    baseURL: REACT_APP_BASE_URL,
    headers: {
        'Authorization': `Bearer ${REACT_APP_AUTHORIZATION_TOKEN}`
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
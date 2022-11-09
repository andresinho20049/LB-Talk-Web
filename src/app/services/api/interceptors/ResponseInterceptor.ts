import { AxiosResponse } from "axios";


export const responseInterceptor = (res: AxiosResponse) => {
    return res;
};
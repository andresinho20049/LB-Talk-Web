import { AxiosRequestConfig } from "axios";


export const RequestInterceptor = (req:AxiosRequestConfig) => {
    //Caso precisa adionar headers em requisições especificas, 
    //ou precisar de alguma forma rastrear a requisição, add code aqui.

    console.log(JSON.stringify(req));
    return req;
}
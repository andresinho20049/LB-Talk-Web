import { AxiosError } from "axios";

export const errorInterceptor = (error: AxiosError) => {
    
    if (error.message === "Network Error") {
        return Promise.reject(new Error("Erro de conexão"));
    } else if (error.response?.status === 401) {
        // return Promise.reject(new Error("Erro de conexão"));
        console.log("Error 401 - identificado");
    } 

    return Promise.reject(error);
}
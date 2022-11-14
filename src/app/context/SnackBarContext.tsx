import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react"


interface ISnackBarContextData {
    msg: string,
    showMsg: (msg: string, isError?: boolean) => void,
    isMsg: boolean,
    isError: boolean,
    handleClose: () => void
}

export const SnackBarContext = createContext({} as ISnackBarContextData);

export const useSnackBarContext = () => useContext(SnackBarContext);

interface ISnackBarProviderProps {
    children: ReactNode
}

export const SnackBarProvider = ({children}:ISnackBarProviderProps) => {

    const [msg, setMsg] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);

    const showMsg = useCallback((msg: string, isError = false) => {
        setMsg(msg);
        setIsError(isError);
    }, [msg, isError]);

    const handleClose = useCallback(() => {
        setMsg('');
    }, [msg])
    
    return (
        <SnackBarContext.Provider value={{msg, showMsg, isMsg: !!msg, isError, handleClose}}>
            {children}
        </SnackBarContext.Provider>
    )

}
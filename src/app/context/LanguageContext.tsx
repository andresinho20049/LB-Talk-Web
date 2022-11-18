import { createContext, ReactNode, useContext, useState } from "react";

export type LanguageTypes = 'pt' | 'en';

export type ModeTranscriptTypes = 'Fala' | 'Texto';

export interface LanguageContextProps {
    transcript: string,
    language: LanguageTypes,
    mode: ModeTranscriptTypes,
    setTranscript: (value: string) => void,
    toggleLanguage: (value: LanguageTypes) => void,
    toggleMode: (value: ModeTranscriptTypes) => void
}

const LanguageContext = createContext<LanguageContextProps>({} as LanguageContextProps);

export const useLanguageContext = () => useContext(LanguageContext);

export interface LanguagemContextProviderProps {
    children: ReactNode;
}

export const LanguagemProvider = ({ children }: LanguagemContextProviderProps) => {

    const [transcript, setTranscript] = useState('');
    const [languageState, setLanguage] = useState<LanguageTypes>('pt');
    const [modeState, setMode] = useState<ModeTranscriptTypes>('Fala');

    return (
        <LanguageContext.Provider value={{
            transcript,
            language: languageState,
            mode: modeState,
            setTranscript,
            toggleLanguage: setLanguage,
            toggleMode: setMode
        }}>
            {children}
        </LanguageContext.Provider>
    )
}
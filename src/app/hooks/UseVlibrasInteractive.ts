import { useCallback } from 'react';
import ReactDOM from 'react-dom';


export const useVlibrasInteractive = () => {



    const validLoad = (): boolean => {
        const vpwControls = document.getElementsByClassName('vpw-controls')[0]
        return !!vpwControls;
    };


    const openWrapper = useCallback(() => {

        if (!validLoad)
            return;

        const divVlibras = document.querySelector('[vw-plugin-wrapper]');
        if (!!divVlibras) {

            if (!divVlibras.classList.contains('active')) {
                const vwAccessBtn = document.querySelector('[vw-access-button]');

                //@ts-ignore
                vwAccessBtn?.click();
            }
        }

    }, []);

    const closeWrapper = useCallback(() => {

        if (!validLoad)
            return;

        const divVlibras = document.querySelector('[vw-plugin-wrapper]');
        if (!!divVlibras) {

            if (divVlibras.classList.contains('active')) {
                const vpwClose = document.getElementsByClassName('vpw-settings-btn-close')[0];

                //@ts-ignore
                vpwClose?.click();
            }
        }
    }, []);

    const readTranscript = useCallback((transcript: string) => {

        if (!validLoad)
            return;

        //@ts-ignore
        window?.plugin?.player?.translate(transcript);

    }, []);

    return {
        openWrapper,
        closeWrapper,
        readTranscript
    }

}
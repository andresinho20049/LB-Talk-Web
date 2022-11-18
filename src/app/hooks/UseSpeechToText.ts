import { useCallback } from 'react';
import { useSnackBarContext, useLanguageContext } from '../context';
import { job, translate } from '../services';
import { IJobConfig } from '../interface';


export const useSpeechToText = () => {

    const { language, transcript, setTranscript } = useLanguageContext();
    const { showMsg } = useSnackBarContext();

    const handleJob = useCallback(async (audioFile: File) => {

        const config: IJobConfig = {
            type: 'transcription',
            transcription_config: {
                operating_point: 'enhanced',
                language: language
            }
        }

        const result = await job({ config, data_file: audioFile });

        if (result instanceof Error) {
            showMsg(result.message);
            return null;
        } else {
            return result;
        }

    }, []);

    const handleSpeechToText = useCallback((audioFile: File) => {

        showMsg("Iniciando transcrição do audio, por favor aguarde", 'info');

        handleJob(audioFile)
            .then((jobId) => {
                if (!!jobId) {

                    /*
                        Explicando a nescessidade do setInterval, em alguns casos 
                        ao consumir o endpoint de transcript passando o ID é retornado
                        404 com a msg que o JobId não existe, podendo demorar até 1 min para retorna o texto.

                        Em projeto profissional, vale apena investir na API SpeechToText do Google
                    */

                    let tentativas = 0;
                    const interval = setInterval(() => {

                        showMsg("Transcrevendo audio", 'info');

                        translate(jobId)
                            .then((res) => {

                                if (res instanceof Error) {
                                    if (tentativas > 5) {
                                        clearInterval(interval);
                                        showMsg('Timeout, API não retornou frase');
                                    }
                                    tentativas++;
                                } else {
                                    clearInterval(interval);
                                    setTranscript(res);
                                }
                            })

                    }, 10000);
                }
            });

    }, [transcript]);

    return {
        handleSpeechToText
    };

}
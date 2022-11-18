import { useCallback, useState } from 'react';
import { useSnackBarContext } from './../context';
import MicRecorder from 'mic-recorder';

export const useRecord = () => {

    const { showMsg } = useSnackBarContext();

    const [isRecording, setIsRecording] = useState<boolean>(false);
    const [audioFile, setAudioFile] = useState<File | null>(null);
    const [audioUrl, setAudioUrl] = useState<string>('');

    const recorder = new MicRecorder({
        encoder: 'wav'
    });

    const startRecord = useCallback(() => {

        recorder.start()
        .then(() => {
            setIsRecording(true);
        })
        .catch((e) => {
            console.error(e);
            showMsg(e?.message || 'Error start record');
        })

    }, []);

    const stopRecord = useCallback(() => {

        recorder
            .stop()
            .getAudio()
            .then(([buffer, blob]) => {
                setIsRecording(false);

                const file = new File(buffer, 'record.mp3', {
                    type: blob.type,
                    lastModified: Date.now()
                });

                setAudioFile(file);

                const urlFile = URL.createObjectURL(file);
                setAudioUrl(urlFile);

            }).catch((e) => {
                console.error(e);
                showMsg(e?.message || 'Error stop record');
            });

    }, []);

    return {
        isRecording,
        
        audioUrl,
        audioFile,

        startRecord,
        stopRecord
    }

}
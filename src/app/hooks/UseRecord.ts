import { useSnackBarContext } from './../context/SnackBarContext';
import MicRecorder from 'mic-recorder';
import { useCallback, useState } from 'react';

export const useRecord = () => {

    const { showMsg } = useSnackBarContext();

    const [isRecording, setIsRecording] = useState<boolean>(false);
    const [audioUrl, setAudioUrl] = useState<string>('');
    const [audioFile, setAudioFile] = useState<File | null>(null);

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
            showMsg(e?.message || 'Error start record', true);
        })

    }, []);

    const stopRecord = useCallback(() => {

        recorder
            .stop()
            .getAudio()
            .then(([buffer, blob]) => {
                setIsRecording(false);

                const file = new File(buffer, 'recording.mp3', {
                    type: blob.type,
                    lastModified: Date.now()
                });

                setAudioFile(file);

                const urlFile = URL.createObjectURL(file);
                setAudioUrl(urlFile);

            }).catch((e) => {
                console.error(e);
                showMsg(e?.message || 'Error stop record', true);
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
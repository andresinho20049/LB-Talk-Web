
export interface IReqJob {
    config: IJobConfig,
    data_file: IDataFile
}

export interface IDataFile {
    uri: string,
    type: 'audio/mpeg3' | 'text/plain' | 'application/octet-stream' | 'application/pdf' | 'audio/mpeg' | 'image/jpeg' | 'image/png' | 'audio/wav',
    name: string,
}

export interface IJobConfig {
    type: 'transcription',
    transcription_config: ITranscriptionConfig
}

interface ITranscriptionConfig {
    operating_point: 'enhanced',
    language: 'pt' | 'en'
}

export interface IResponseJob {
    id: string
}
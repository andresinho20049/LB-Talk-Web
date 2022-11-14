import { IReqJob } from '../../../interface';
import { ApiForm } from '../ApiConfig';
import FormData from 'form-data';


const job = async (req: IReqJob): Promise<string | Error> => {

    try {

        var form = new FormData();
        form.append('config', JSON.stringify(req.config));
        form.append('data_file', req.data_file);

        ApiForm.defaults.headers.post['Content-Type'] = 'multipart/form-data';

        const { data } = await ApiForm.post(`/jobs?`, form, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })

        return data?.id;
    } catch (error: any) {
        console.error(error);
        return new Error(error?.message || 'Erro ao consultar a API');
    }
}

const translate = async (jobId: string): Promise<string | Error> => {
    try {

        if (!jobId || jobId === '')
            return new Error('JobId não informado');

        const { data } = await ApiForm.get(`/jobs/${jobId}/transcript?format=txt`);

        return data;
    } catch (error: any) {
        return new Error(error?.message || 'Erro ao consultar a API');
    }
}

export {
    job,
    translate
};


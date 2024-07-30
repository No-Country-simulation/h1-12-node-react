import axios from "axios";
import fs from 'fs';
import FormData from 'form-data';

export class AiService {

    constructor(){
    }

    transcribe = async (req) => {
        const form = new FormData();
        form.append('file', fs.createReadStream(req.file.path), req.file.originalname);

        const {data: response } = await axios.post('https://aquamarine.dcs.codes/s2t', form, {
        headers: {
            ...form.getHeaders(),
        },
        });

        const transcription = response.data.text;

        fs.unlinkSync(req.file.path);
        return transcription
    }
}
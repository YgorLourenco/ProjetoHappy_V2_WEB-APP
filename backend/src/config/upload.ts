import { request } from 'express';
import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        // Esses pontos são para voltar o diretório
        destination: path.join(__dirname, '..','..','uploads'),
        filename:(request, file, cb) => {
            // Date.now gera um nome com data e hora pra evitar sobrescrever a imagem
            const fileName = `${Date.now()}-${file.originalname}`
            // Callback recebe o erro e o resultado
            cb(null, fileName);
        },
    })
}
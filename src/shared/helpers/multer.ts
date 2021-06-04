import { v4 as uuid } from 'uuid'
import {BadRequestException} from "@nestjs/common"
import * as mime from 'mime-types'

export const generateFileName = (
    req: Express.Request,
    file: Express.Multer.File,
    callback: (error: Error | null, filename: string) => void
): void => {
    const name = file.originalname.split('.')[0]
    const fileExtName = mime.extension(file.mimetype)
    const randomName = uuid()
    callback(null, `${name}-${randomName}.${fileExtName}`)
};

export const imageFileFilter = (req: any, file: {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    destination: string;
    filename: string;
    path: string;
    buffer: Buffer;
}, callback: (error: Error | null, acceptFile: boolean) => void): void => {
    const errorMessage = `Formato inválido de arquivo enviado. Somente são permitidos arquivos de tipo imagem.`

    if (file.mimetype.split('/')[0] !== 'image') {
        callback(new BadRequestException(errorMessage), false)
    }

    callback(null, true);
};
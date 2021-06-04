import { Injectable } from '@nestjs/common';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import { ImageRepository } from './image.repository';

@Injectable()
export class ImageService {
    constructor(private readonly imageRepository: ImageRepository) {}

    @Transactional()
    async create(image: Express.Multer.File) {
        const newImage = this.imageRepository.create({
            destination: image.path,
            mimetype: image.mimetype,
            originalName: image.originalname,
            title: image.filename,
        });

        return this.imageRepository.save(newImage);
    }

    async findById(id: string) {
        return this.imageRepository.findOne(id);
    }
}

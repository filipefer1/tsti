import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageRepository } from './image.repository';
import { ImageService } from './image.service';

@Module({
    imports: [TypeOrmModule.forFeature([ImageRepository])],
    providers: [ImageService],
    exports: [ImageService],
})
export class ImageModule {}

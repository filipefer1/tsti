import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { Image } from './image.entity';

@EntityRepository(Image)
export class ImageRepository extends BaseRepository<Image> {}

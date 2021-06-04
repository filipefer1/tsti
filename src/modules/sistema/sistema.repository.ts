import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { Sistema } from './sistema.entity';

@EntityRepository(Sistema)
export class SistemaRepository extends BaseRepository<Sistema> {}

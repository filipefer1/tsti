import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { Categorias } from './categorias.entity';

@EntityRepository(Categorias)
export class CategoriasRepository extends BaseRepository<Categorias> {}

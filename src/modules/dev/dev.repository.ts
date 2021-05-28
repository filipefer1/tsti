import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { Desenvolvedor } from './dev.entity';

@EntityRepository(Desenvolvedor)
export class DesenvolvedorRepository extends BaseRepository<Desenvolvedor> {}

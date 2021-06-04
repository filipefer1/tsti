import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { OrdemServico } from './ordem-servico.entity';

@EntityRepository(OrdemServico)
export class OrdemServicoRepository extends BaseRepository<OrdemServico> {}

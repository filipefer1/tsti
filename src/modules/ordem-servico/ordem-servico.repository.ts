import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { OrdemServico } from './ordem-servico.entity';

@EntityRepository(OrdemServico)
export class OrdemServicoRepository extends BaseRepository<OrdemServico> {
    async findByClientId(clientId: string) {
        return await this.createQueryBuilder()
            .select([
                'OrdemServico.id id',
                'OrdemServico.createdAt dataAbertura',
                'OrdemServico.status status',
                'Categoria.title categoria',
                'Sistema.name sistema',
            ])
            .innerJoin('OrdemServico.cliente', 'Cliente')
            .innerJoin('OrdemServico.categoria', 'Categoria')
            .innerJoin('OrdemServico.sistema', 'Sistema')
            .where('Cliente.id = :clientId', { clientId })
            .orderBy('OrdemServico.createdAt', 'DESC')
            .getRawMany();
    }
}

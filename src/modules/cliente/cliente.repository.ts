import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { Cliente } from './cliente.entity';

@EntityRepository(Cliente)
export class ClienteRepository extends BaseRepository<Cliente> {}

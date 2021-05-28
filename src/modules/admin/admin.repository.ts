import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { Admin } from './admin.entity';

@EntityRepository(Admin)
export class AdminRepository extends BaseRepository<Admin> {}

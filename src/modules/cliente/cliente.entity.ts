import { Column, Entity } from 'typeorm';
import { EntityBase } from '../../shared/entity-base';

@Entity()
export class Cliente extends EntityBase {
    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    email: string;
}

import { Column, Entity } from 'typeorm';
import { EntityBase } from '../../shared/entity-base';

@Entity()
export class Desenvolvedor extends EntityBase {
    @Column()
    name: string;

    @Column()
    cpf: string;
}

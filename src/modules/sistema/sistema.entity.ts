import { Column, Entity } from 'typeorm';
import { EntityBase } from '../../shared/entity-base';

@Entity()
export class Sistema extends EntityBase {
    @Column()
    name: string;
}

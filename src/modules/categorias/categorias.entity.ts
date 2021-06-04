import { Column, Entity } from 'typeorm';
import { EntityBase } from '../../shared/entity-base';

@Entity()
export class Categorias extends EntityBase {
    @Column()
    title: string;
}

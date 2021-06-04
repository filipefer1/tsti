import { Column, Entity } from 'typeorm';
import { EntityBase } from '../../shared/entity-base';

@Entity()
export class Image extends EntityBase {
    @Column()
    title: string;

    @Column('text')
    destination: string;

    @Column()
    originalName: string;

    @Column()
    mimetype: string;
}

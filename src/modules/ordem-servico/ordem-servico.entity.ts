import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { EntityBase } from '../../shared/entity-base';
import { Admin } from '../admin/admin.entity';
import { Categorias } from '../categorias/categorias.entity';
import { Cliente } from '../cliente/cliente.entity';
import { Desenvolvedor } from '../dev/dev.entity';
import { Image } from '../image/image.entity';
import { Sistema } from '../sistema/sistema.entity';

@Entity()
export class OrdemServico extends EntityBase {
    @ManyToOne(() => Admin, { nullable: true })
    admin: Admin;

    @ManyToOne(() => Sistema)
    sistema: Sistema;

    @ManyToOne(() => Desenvolvedor, { nullable: true })
    dev: Desenvolvedor;

    @ManyToOne(() => Cliente)
    cliente: Cliente;

    @ManyToOne(() => Categorias)
    categoria: Categorias;

    @OneToOne(() => Image, { nullable: true })
    @JoinColumn()
    image: Image;

    @Column()
    title: string;

    @Column('text')
    description: string;

    @Column({ nullable: true })
    status: string;

    @Column({ nullable: true })
    qtd_dias: number;

    @Column({ nullable: true })
    finishedAt: Date;
}

import { Column, Entity, ManyToOne } from 'typeorm';
import { EntityBase } from '../../shared/entity-base';
import { Cliente } from '../cliente/cliente.entity';
import { Desenvolvedor } from '../dev/dev.entity';
import { OrdemServico } from '../ordem-servico/ordem-servico.entity';

@Entity()
export class Feedback extends EntityBase {
    @Column({ type: 'mediumtext' })
    content: string;

    @ManyToOne(() => Desenvolvedor, { nullable: true })
    dev?: Desenvolvedor;

    @ManyToOne(() => Cliente, { nullable: true })
    client?: Cliente;

    @ManyToOne(() => OrdemServico)
    ordem: OrdemServico;
}

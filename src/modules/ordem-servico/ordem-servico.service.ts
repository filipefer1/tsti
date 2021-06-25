import { Injectable, NotFoundException } from '@nestjs/common';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import { AdminService } from '../admin/admin.service';
import { DesenvolvedorService } from '../dev/dev.service';
import { ImageService } from '../image/image.service';
import { OrdemServicoDto, UpdateOrdemServicoDto } from './ordem-servico.dto';
import { OrdemServicoRepository } from './ordem-servico.repository';

@Injectable()
export class OrdemServicoService {
    constructor(
        private readonly ordemServicoRepository: OrdemServicoRepository,
        private readonly imageService: ImageService,
        private readonly adminService: AdminService,
        private readonly devService: DesenvolvedorService,
    ) {}

    @Transactional()
    async create(dto: OrdemServicoDto) {
        const ordemServico = this.ordemServicoRepository.create({
            categoria: { id: dto.categoriaId },
            sistema: { id: dto.sistemaId },
            cliente: { id: dto.clienteId },
            description: dto.description,
            title: dto.title,
            status: 'ABERTO',
        });

        if (dto.imageId) {
            const image = await this.imageService.findById(dto.imageId);
            ordemServico.image = image;
        }
        return this.ordemServicoRepository.save(ordemServico);
    }

    @Transactional()
    async update(id: string, dto: UpdateOrdemServicoDto) {
        const ordemServico = await this.ordemServicoRepository.findOne({
            where: { status: 'ABERTO', id },
        });

        if (!ordemServico) {
            throw new NotFoundException('Ordem de servico não encontrado!');
        }

        const [dev, admin] = await Promise.all([
            this.devService.findOne(dto.devId),
            this.adminService.findOne(dto.adminId),
        ]);

        ordemServico.qtd_dias = dto.qtdDias;
        ordemServico.admin = admin;
        ordemServico.dev = dev;
        ordemServico.status = 'EM ANDAMENTO';

        return this.ordemServicoRepository.save(ordemServico);
    }

    async findDetailsByClientId(id: string, clientId: string) {
        const ordemServico = await this.ordemServicoRepository.findOne({
            relations: [
                'admin',
                'dev',
                'cliente',
                'categoria',
                'sistema',
                'image',
            ],
            where: { id, cliente: { id: clientId } },
        });

        if (!ordemServico) {
            throw new NotFoundException();
        }
        return ordemServico;
    }
    async findDetailsByDevId(id: string, devId: string) {
        const ordemServico = await this.ordemServicoRepository.findOne({
            relations: [
                'admin',
                'dev',
                'cliente',
                'categoria',
                'sistema',
                'image',
            ],
            where: { id, dev: { id: devId } },
        });

        if (!ordemServico) {
            throw new NotFoundException();
        }

        if (ordemServico.image) {
            ordemServico.image.destination = `http://localhost:3000/${ordemServico.image.destination}`;
        }
        return ordemServico;
    }

    async findOpen() {
        return this.ordemServicoRepository.findOpen();
    }

    async findOrdersByDevId(devId: string) {
        return this.ordemServicoRepository.find({
            select: ['id', 'title', 'description', 'createdAt'],
            relations: ['dev', 'categoria', 'sistema', 'cliente'],
            where: { dev: { id: devId }, status: 'EM ANDAMENTO' },
        });
    }

    async findOrdersByClientId(clientId: string) {
        return this.ordemServicoRepository.findByClientId(clientId);
    }

    async findOrderDetails(orderId: string) {
        const ordemServico = await this.ordemServicoRepository.findOne({
            relations: [
                'admin',
                'dev',
                'cliente',
                'categoria',
                'sistema',
                'image',
            ],
            where: { id: orderId },
        });

        if (!ordemServico) {
            throw new NotFoundException('n tem ordem');
        }
        if (ordemServico.image) {
            ordemServico.image.destination = `http://localhost:3000/${ordemServico.image.destination}`;
        }

        return ordemServico;
    }

    async finishOrder(orderId: string) {
        const order = await this.ordemServicoRepository.findOne(orderId, {
            where: { status: 'EM ANDAMENTO' },
        });

        if (!order) {
            throw new NotFoundException('Não tem');
        }

        order.status = 'FINALIZADO';
        order.finishedAt = new Date();

        return this.ordemServicoRepository.save(order);
    }
}

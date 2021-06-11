import { Injectable } from '@nestjs/common';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import { ClienteService } from '../cliente/cliente.service';
import { DesenvolvedorService } from '../dev/dev.service';
import { FeedbackDto, GetFeedbackDto } from './feedback.dto';
import { FeedbackRepository } from './feedback.repository';

@Injectable()
export class FeedBackService {
    constructor(
        private readonly feedBackRepository: FeedbackRepository,
        private readonly devService: DesenvolvedorService,
        private readonly clientService: ClienteService,
    ) {}

    @Transactional()
    async create(dto: FeedbackDto) {
        const feedback = this.feedBackRepository.create({
            ordem: { id: dto.orderId },
            content: dto.content,
        });

        if (dto.devId) {
            const dev = await this.devService.findOne(dto.devId);
            feedback.dev = dev;
        }

        if (dto.clientId) {
            const client = await this.clientService.findOne(dto.devId);
            feedback.client = client;
        }

        return this.feedBackRepository.save(feedback);
    }

    async findFeedbacks(orderId: string, dto: GetFeedbackDto) {
        const feedbacks = await this.feedBackRepository.findFeedbacks(
            orderId,
            dto,
        );

        return feedbacks;
    }
}

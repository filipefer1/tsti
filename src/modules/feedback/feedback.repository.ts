import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { GetFeedbackDto } from './feedback.dto';
import { Feedback } from './feedback.entity';

@EntityRepository(Feedback)
export class FeedbackRepository extends BaseRepository<Feedback> {
    async findFeedbacks(orderId: string, dto: GetFeedbackDto) {
        const feedbacks = this.createQueryBuilder()
            .leftJoinAndSelect('Feedback.dev', 'Dev')
            .leftJoinAndSelect('Feedback.client', 'Client')
            .where('Feedback.ordemId = :orderId', { orderId });

        if (dto.devId) {
            feedbacks.orWhere('Feedback.devId = :devId', { devId: dto.devId });
        }

        if (dto.clientId) {
            feedbacks.orWhere('Feedback.clientId = :clientId', {
                clientId: dto.clientId,
            });
        }

        return feedbacks.orderBy('Feedback.createdAt', 'ASC').getMany();
    }
}

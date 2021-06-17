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

        return feedbacks.orderBy('Feedback.createdAt', 'ASC').getMany();
    }
}

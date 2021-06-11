import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Query,
    ValidationPipe,
} from '@nestjs/common';
import { GetFeedbackDto } from '../../feedback/feedback.dto';

import { FeedBackService } from '../../feedback/feedback.service';

import { CreateFeedbackDto } from '../dtos/create-feedback.dto';

@Controller('feedback')
export class FeedbackController {
    constructor(private readonly feedbackService: FeedBackService) {}

    @Post()
    async create(@Body(ValidationPipe) dto: CreateFeedbackDto) {
        return this.feedbackService.create(dto);
    }

    @Get(':orderId')
    async findFeedsback(
        @Param('orderId') orderId: string,
        @Query(ValidationPipe) dto: GetFeedbackDto,
    ) {
        return this.feedbackService.findFeedbacks(orderId, dto);
    }
}

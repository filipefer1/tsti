import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from '../cliente/cliente.module';
import { DevModule } from '../dev/dev.module';
import { FeedbackRepository } from './feedback.repository';
import { FeedBackService } from './feedback.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([FeedbackRepository]),
        DevModule,
        ClienteModule,
    ],
    providers: [FeedBackService],
    exports: [FeedBackService],
})
export class FeedbackModule {}

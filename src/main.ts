import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { initializeTransactionalContext } from 'typeorm-transactional-cls-hooked';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
    initializeTransactionalContext();
    const server = express();
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.use('/uploads', express.static('uploads'));
    app.enableCors();
    await app.listen(3000);
}

bootstrap();

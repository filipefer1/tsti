import { NestFactory } from '@nestjs/core';
import { initializeTransactionalContext } from 'typeorm-transactional-cls-hooked';
import { AppModule } from './app.module';

async function bootstrap() {
    initializeTransactionalContext();
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(3000);
}

bootstrap();

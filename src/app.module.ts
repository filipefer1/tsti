import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BffModule } from './modules/bff/bff.module';

@Module({
    imports: [TypeOrmModule.forRoot(), BffModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

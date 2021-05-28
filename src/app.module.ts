import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllersModule } from './modules/controllers/controllers.module';

@Module({
    imports: [TypeOrmModule.forRoot(), ControllersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

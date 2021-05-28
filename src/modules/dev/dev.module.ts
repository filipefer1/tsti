import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DesenvolvedorRepository } from './dev.repository';
import { DesenvolvedorService } from './dev.service';

@Module({
    imports: [TypeOrmModule.forFeature([DesenvolvedorRepository])],
    providers: [DesenvolvedorService],
    exports: [DesenvolvedorService],
})
export class DevModule {}

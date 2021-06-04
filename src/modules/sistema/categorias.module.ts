import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SistemaRepository } from './sistema.repository';
import { SistemaService } from './sistema.service';

@Module({
    imports: [TypeOrmModule.forFeature([SistemaRepository])],
    providers: [SistemaService],
    exports: [SistemaService],
})
export class SistemaModule {}

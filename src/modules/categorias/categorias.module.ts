import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriasRepository } from './categorias.repository';
import { CategoriasService } from './categorias.service';

@Module({
    imports: [TypeOrmModule.forFeature([CategoriasRepository])],
    providers: [CategoriasService],
    exports: [CategoriasService],
})
export class CategoriasModule {}

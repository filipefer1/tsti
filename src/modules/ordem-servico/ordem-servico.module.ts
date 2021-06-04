import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageModule } from '../image/image.module';
import { OrdemServicoRepository } from './ordem-servico.repository';
import { OrdemServicoService } from './ordem-servico.service';
import { AdminModule } from '../admin/admin.module';
import { DevModule } from '../dev/dev.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([OrdemServicoRepository]),
        ImageModule,
        AdminModule,
        DevModule,
    ],
    providers: [OrdemServicoService],
    exports: [OrdemServicoService],
})
export class OrdemServicoModule {}

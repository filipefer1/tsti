import { Module } from '@nestjs/common';
import { AdminModule } from '../admin/admin.module';
import { DevModule } from '../dev/dev.module';
import { ImageModule } from '../image/image.module';
import { OrdemServicoModule } from '../ordem-servico/ordem-servico.module';
import { AdminController } from './controllers/admin.controller';
import { DevController } from './controllers/dev.controller';
import { OrdemServicoController } from './controllers/ordem-servico.controller';

@Module({
    imports: [DevModule, OrdemServicoModule, ImageModule, AdminModule],
    controllers: [DevController, OrdemServicoController, AdminController],
})
export class BffModule {}

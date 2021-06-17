import { Module } from '@nestjs/common';
import { AdminModule } from '../admin/admin.module';
import { CategoriasModule } from '../categorias/categorias.module';
import { DevModule } from '../dev/dev.module';
import { FeedbackModule } from '../feedback/feedback.module';
import { ImageModule } from '../image/image.module';
import { OrdemServicoModule } from '../ordem-servico/ordem-servico.module';
import { SistemaModule } from '../sistema/categorias.module';
import { AdminController } from './controllers/admin.controller';
import { CategoryController } from './controllers/category.controller';
import { DevController } from './controllers/dev.controller';
import { FeedbackController } from './controllers/feedback.controller';
import { OrdemServicoController } from './controllers/ordem-servico.controller';
import { SystemController } from './controllers/system.controller';

@Module({
    imports: [
        DevModule,
        OrdemServicoModule,
        ImageModule,
        AdminModule,
        FeedbackModule,
        CategoriasModule,
        SistemaModule,
    ],
    controllers: [
        DevController,
        OrdemServicoController,
        AdminController,
        FeedbackController,
        CategoryController,
        SystemController,
    ],
})
export class BffModule {}

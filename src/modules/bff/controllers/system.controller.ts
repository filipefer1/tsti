import { Controller, Get } from '@nestjs/common';
import { CategoriasService } from '../../categorias/categorias.service';
import { SistemaService } from '../../sistema/sistema.service';

@Controller('systems')
export class SystemController {
    constructor(private readonly systemsService: SistemaService) {}

    @Get()
    async index() {
        return this.systemsService.findAll();
    }
}

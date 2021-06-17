import { Controller, Get } from '@nestjs/common';
import { CategoriasService } from '../../categorias/categorias.service';

@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoriasService) {}

    @Get()
    async index() {
        return this.categoryService.findAll();
    }
}

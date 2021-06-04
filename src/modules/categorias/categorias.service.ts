import { Injectable } from '@nestjs/common';
import { CategoriasRepository } from './categorias.repository';

@Injectable()
export class CategoriasService {
    constructor(private readonly categoriasRepository: CategoriasRepository) {}
}

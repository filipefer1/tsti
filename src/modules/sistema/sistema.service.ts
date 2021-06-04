import { Injectable } from '@nestjs/common';
import { SistemaRepository } from './sistema.repository';

@Injectable()
export class SistemaService {
    constructor(private readonly sistemaRepository: SistemaRepository) {}
}

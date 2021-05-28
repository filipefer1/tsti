import { Injectable } from '@nestjs/common';
import { ClienteRepository } from './cliente.repository';

@Injectable()
export class ClienteService {
    constructor(private readonly clienteRepository: ClienteRepository) {}
}

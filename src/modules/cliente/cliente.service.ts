import { Injectable, NotFoundException } from '@nestjs/common';
import { ClienteRepository } from './cliente.repository';

@Injectable()
export class ClienteService {
    constructor(private readonly clienteRepository: ClienteRepository) {}

    async findOne(id: string) {
        const client = await this.clienteRepository.findOne(id);

        if (!client) throw new NotFoundException();

        return client;
    }
}

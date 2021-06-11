import { Injectable, NotFoundException } from '@nestjs/common';
import { DesenvolvedorRepository } from './dev.repository';

@Injectable()
export class DesenvolvedorService {
    constructor(
        private readonly desenvolvedorReposiroy: DesenvolvedorRepository,
    ) {}

    async findAll() {
        return this.desenvolvedorReposiroy.find();
    }

    async findOne(id: string) {
        const dev = await this.desenvolvedorReposiroy.findOne(id);

        if (!dev) throw new NotFoundException();

        return dev;
    }
}

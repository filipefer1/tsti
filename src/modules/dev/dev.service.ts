import { Injectable } from '@nestjs/common';
import { DesenvolvedorRepository } from './dev.repository';

@Injectable()
export class DesenvolvedorService {
    constructor(
        private readonly desenvolvedorReposiroy: DesenvolvedorRepository,
    ) {}

    async findAll() {
        return this.desenvolvedorReposiroy.find();
    }
}

import { Injectable } from '@nestjs/common';
import { AdminRepository } from './admin.repository';

@Injectable()
export class AdminService {
    constructor(private readonly adminRepository: AdminRepository) {}

    async findOne(id: string) {
        return this.adminRepository.findOne(id);
    }

    async findAll() {
        return this.adminRepository.find();
    }
}

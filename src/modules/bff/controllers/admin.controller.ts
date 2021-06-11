import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AdminService } from '../../admin/admin.service';

@Controller('/admins')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Get()
    findAll() {
        return this.adminService.findAll();
    }
}

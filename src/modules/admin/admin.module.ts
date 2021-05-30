import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminRepository } from './admin.repository';
import { AdminService } from './admin.service';

@Module({
    imports: [TypeOrmModule.forFeature([AdminRepository])],
    providers: [AdminService],
    exports: [AdminService],
})
export class AdminModule {}

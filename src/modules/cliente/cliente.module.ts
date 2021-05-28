import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteRepository } from './cliente.repository';
import { ClienteService } from './cliente.service';

@Module({
    imports: [TypeOrmModule.forFeature([ClienteRepository])],
    providers: [ClienteService],
    exports: [ClienteService],
})
export class ClienteModule {}

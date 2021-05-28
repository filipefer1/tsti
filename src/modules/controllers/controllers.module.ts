import { Module } from '@nestjs/common';
import { DevModule } from '../dev/dev.module';
import { DevController } from './dev.controller';

@Module({
    imports: [DevModule],
    controllers: [DevController],
})
export class ControllersModule {}

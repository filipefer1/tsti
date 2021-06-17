import {
    Controller,
    Get,
    Param,
    Patch,
    Query,
    UseGuards,
} from '@nestjs/common';

import { DesenvolvedorService } from '../../dev/dev.service';

@Controller('/devs')
export class DevController {
    constructor(private readonly desenvolvedorService: DesenvolvedorService) {}

    @Get()
    async findAll() {
        return this.desenvolvedorService.findAll();
    }

    @Get(':ordem')
    findOrderByDevId(@Query('id') id: string, @Param('ordem') order: string) {
        return { id, order };
    }

    @Patch(':ordemId')
    async finishOrdem(@Param('ordemId') ordemId: string) {
        return ordemId;
    }
}

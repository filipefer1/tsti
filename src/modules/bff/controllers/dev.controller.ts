import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';

import { DesenvolvedorService } from '../../dev/dev.service';

@Controller('/devs')
export class DevController {
    constructor(private readonly desenvolvedorService: DesenvolvedorService) {}

    @Get()
    findAll() {
        return this.desenvolvedorService.findAll();
    }

    @Get(':ordem')
    findOrderByDevId(@Query('id') id: string, @Param('ordem') order: string) {
        return { id, order };
    }
}

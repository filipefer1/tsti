import { Controller, Get, Param, UseGuards } from '@nestjs/common';

import { DesenvolvedorService } from '../../dev/dev.service';

@Controller('/devs')
export class DevController {
    constructor(private readonly desenvolvedorService: DesenvolvedorService) {}

    @Get()
    findAll() {
        return this.desenvolvedorService.findAll();
    }
}

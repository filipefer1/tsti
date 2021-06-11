import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    Query,
    UploadedFile,
    UseGuards,
    UseInterceptors,
    ValidationPipe,
} from '@nestjs/common';
import {
    FileFieldsInterceptor,
    FileInterceptor,
} from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import {
    generateFileName,
    imageFileFilter,
} from '../../../shared/helpers/multer';
import { ImageService } from '../../image/image.service';

import { OrdemServicoService } from '../../ordem-servico/ordem-servico.service';
import {
    CreateOrdemServico,
    UpdateOrdemServico,
} from '../dtos/create-ordem-servico';

@Controller('ordem-servico')
export class OrdemServicoController {
    constructor(
        private readonly ordemServicoService: OrdemServicoService,
        private readonly imageService: ImageService,
    ) {}

    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './uploads',
                filename: generateFileName,
            }),
            fileFilter: imageFileFilter,
        }),
    )
    @Post()
    async create(
        @UploadedFile() file: Express.Multer.File,
        @Body(ValidationPipe) dto: CreateOrdemServico,
    ) {
        const image = await this.imageService.create(file);
        return this.ordemServicoService.create({ ...dto, imageId: image.id });
    }

    @Get()
    async index() {
        return this.ordemServicoService.findOpen();
    }

    @Get(':id')
    async show(@Param('id') id: string, @Query('devId') devId: string) {
        return this.ordemServicoService.findDetailsByDevId(id, devId);
    }

    @Get('dev/:devId')
    async findOrdersByDevId(@Param('devId') devId: string) {
        return this.ordemServicoService.findOrdersByDevId(devId);
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body(ValidationPipe) dto: UpdateOrdemServico,
    ) {
        return this.ordemServicoService.update(id, dto);
    }
}

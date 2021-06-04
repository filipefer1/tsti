import { IsString, IsDefined, IsNumber } from 'class-validator';

export class CreateOrdemServico {
    @IsString()
    @IsDefined()
    title: string;

    @IsString()
    @IsDefined()
    description: string;

    @IsString()
    @IsDefined()
    categoriaId: string;

    @IsString()
    @IsDefined()
    sistemaId: string;

    @IsString()
    @IsDefined()
    clienteId: string;
}

export class UpdateOrdemServico {
    @IsString()
    @IsDefined()
    devId: string;

    @IsString()
    @IsDefined()
    adminId: string;

    @IsNumber()
    @IsDefined()
    qtdDias: number;
}

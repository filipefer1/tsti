import { IsDefined, IsOptional, IsString } from 'class-validator';

export class CreateFeedbackDto {
    @IsString()
    @IsDefined()
    orderId: string;

    @IsString()
    @IsDefined()
    content: string;

    @IsString()
    @IsOptional()
    devId?: string;

    @IsString()
    @IsOptional()
    clientId?: string;
}

export class GetFeedback {
    @IsString()
    @IsOptional()
    devId?: string;

    @IsString()
    @IsOptional()
    clientId?: string;
}

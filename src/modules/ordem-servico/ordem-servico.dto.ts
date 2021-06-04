export class OrdemServicoDto {
    title: string;

    description: string;

    categoriaId: string;

    sistemaId: string;

    clienteId: string;

    imageId?: string;
}

export class UpdateOrdemServicoDto {
    devId: string;
    adminId: string;
    qtdDias: number;
}

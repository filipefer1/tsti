import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDev1622238252200 implements MigrationInterface {
    name = 'CreateDev1622238252200';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE `desenvolvedor` (`id` varchar(36) NOT NULL, `createdAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0), `name` varchar(255) NOT NULL, `cpf` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE `desenvolvedor`');
    }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAdminAndClient1622239103041 implements MigrationInterface {
    name = 'CreateAdminAndClient1622239103041';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE `admin` (`id` varchar(36) NOT NULL, `createdAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, `name` varchar(255) NOT NULL, `cpf` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
        await queryRunner.query(
            'CREATE TABLE `cliente` (`id` varchar(36) NOT NULL, `createdAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, `name` varchar(255) NOT NULL, `cpf` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE `cliente`');
        await queryRunner.query('DROP TABLE `admin`');
    }
}

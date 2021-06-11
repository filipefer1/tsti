import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateFeedback1623442937583 implements MigrationInterface {
    name = 'CreateFeedback1623442937583'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `feedback` (`id` varchar(36) NOT NULL, `createdAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, `content` mediumtext NOT NULL, `devId` varchar(36) NULL, `clientId` varchar(36) NULL, `ordemId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `feedback` ADD CONSTRAINT `FK_bc2a6d34b34926e65de20463877` FOREIGN KEY (`devId`) REFERENCES `desenvolvedor`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `feedback` ADD CONSTRAINT `FK_2db3acb4d27ec2cbf750cf51bc4` FOREIGN KEY (`clientId`) REFERENCES `cliente`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `feedback` ADD CONSTRAINT `FK_d2670c559f37594b69ceae649d7` FOREIGN KEY (`ordemId`) REFERENCES `ordem_servico`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `feedback` DROP FOREIGN KEY `FK_d2670c559f37594b69ceae649d7`");
        await queryRunner.query("ALTER TABLE `feedback` DROP FOREIGN KEY `FK_2db3acb4d27ec2cbf750cf51bc4`");
        await queryRunner.query("ALTER TABLE `feedback` DROP FOREIGN KEY `FK_bc2a6d34b34926e65de20463877`");
        await queryRunner.query("DROP TABLE `feedback`");
    }

}

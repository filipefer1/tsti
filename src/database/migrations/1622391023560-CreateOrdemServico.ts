import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateOrdemServico1622391023560 implements MigrationInterface {
    name = 'CreateOrdemServico1622391023560'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `ordem_servico` (`id` varchar(36) NOT NULL, `createdAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, `title` varchar(255) NOT NULL, `description` text NOT NULL, `status` varchar(255) NULL, `qtd_dias` int NULL, `finishedAt` datetime NULL, `adminId` varchar(36) NULL, `sistemaId` varchar(36) NULL, `devId` varchar(36) NULL, `clienteId` varchar(36) NULL, `categoriaId` varchar(36) NULL, `imageId` varchar(36) NULL, UNIQUE INDEX `REL_91f26183ed397fff92f81a497b` (`imageId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `ordem_servico` ADD CONSTRAINT `FK_deb79b551383a7b67d8a5f68ca9` FOREIGN KEY (`adminId`) REFERENCES `admin`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `ordem_servico` ADD CONSTRAINT `FK_c283699b86425f60cab0019db8a` FOREIGN KEY (`sistemaId`) REFERENCES `sistema`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `ordem_servico` ADD CONSTRAINT `FK_ed8cb656e3040f6896c181e7cc8` FOREIGN KEY (`devId`) REFERENCES `desenvolvedor`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `ordem_servico` ADD CONSTRAINT `FK_83e09b8f7a79a7d199e57b19914` FOREIGN KEY (`clienteId`) REFERENCES `cliente`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `ordem_servico` ADD CONSTRAINT `FK_1075f677c74c353c449121edbdb` FOREIGN KEY (`categoriaId`) REFERENCES `categorias`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `ordem_servico` ADD CONSTRAINT `FK_91f26183ed397fff92f81a497bb` FOREIGN KEY (`imageId`) REFERENCES `image`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ordem_servico` DROP FOREIGN KEY `FK_91f26183ed397fff92f81a497bb`");
        await queryRunner.query("ALTER TABLE `ordem_servico` DROP FOREIGN KEY `FK_1075f677c74c353c449121edbdb`");
        await queryRunner.query("ALTER TABLE `ordem_servico` DROP FOREIGN KEY `FK_83e09b8f7a79a7d199e57b19914`");
        await queryRunner.query("ALTER TABLE `ordem_servico` DROP FOREIGN KEY `FK_ed8cb656e3040f6896c181e7cc8`");
        await queryRunner.query("ALTER TABLE `ordem_servico` DROP FOREIGN KEY `FK_c283699b86425f60cab0019db8a`");
        await queryRunner.query("ALTER TABLE `ordem_servico` DROP FOREIGN KEY `FK_deb79b551383a7b67d8a5f68ca9`");
        await queryRunner.query("DROP INDEX `REL_91f26183ed397fff92f81a497b` ON `ordem_servico`");
        await queryRunner.query("DROP TABLE `ordem_servico`");
    }

}

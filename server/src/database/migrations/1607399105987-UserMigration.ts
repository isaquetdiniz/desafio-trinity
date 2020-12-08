import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UserMigration1607399105987 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "app_user",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "name",
                        type: "varchar(200)",
                    },
                    {
                        name: "email",
                        type: "varchar(200)",
                    },
                    {
                        name: "phone",
                        type: "varchar(200)",
                    },
                    {
                        name: "street",
                        type: "varchar(200)",
                    },
                    {
                        name: "city",
                        type: "varchar(200)",
                    },
                    {
                        name: "zipcode",
                        type: "varchar(200)",
                    },
                    {
                        name: "name",
                        type: "varchar(200)",
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("app_user");
    }

}

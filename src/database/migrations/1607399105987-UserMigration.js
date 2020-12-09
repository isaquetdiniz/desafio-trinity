"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMigration1607399105987 = void 0;
const typeorm_1 = require("typeorm");
class UserMigration1607399105987 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("app_user");
    }
}
exports.UserMigration1607399105987 = UserMigration1607399105987;

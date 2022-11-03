import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { idColumn } from "../utils/idColumn";
import { varcharColumn } from "../utils/varcharColumns";

export class users1667238147736 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'register',
            columns: [
                idColumn('id'),
                varcharColumn('name', '100', false),
                varcharColumn('email', '255', false, true),
                varcharColumn('password', '64', false),
                varcharColumn('site', '255', false),
                varcharColumn('phone', '25', false),
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}

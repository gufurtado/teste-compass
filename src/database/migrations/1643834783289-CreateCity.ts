import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCity1643834783289 implements MigrationInterface {

    public async up(queryRunner: QueryRunner):Promise<void> {
        await queryRunner.createTable( new Table({
            name:"city",
            columns:[
                {
                    name:"id",
                    type:"uuid",
                    isPrimary:true
                },
                {
                    name:"name",
                    type:"varchar",
                    isNullable: false
                },
                {
                    name:"state",
                    type:"varchar",
                    isNullable: false
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner):Promise<void>{
        await queryRunner.dropTable('city')
    }

}
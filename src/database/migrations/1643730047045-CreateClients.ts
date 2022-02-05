import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClients1643730047045     implements MigrationInterface {
    public async up(queryRunner: QueryRunner):Promise<void> {
        await queryRunner.createTable( new Table({
            name:"clients",
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
                    name:"gender",
                    type:"varchar",
                },
                {
                    name:"birthDate",
                    type:"date"
                },
                {
                    name:"age",
                    type:"varchar"
                },
                {
                    name:"city",
                    type:"varchar"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner):Promise<void>{
        await queryRunner.dropTable('clients')
    }

}

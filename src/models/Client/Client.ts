import { AutoMap } from "@automapper/classes";
import { Column, Entity, PrimaryColumn } from "typeorm";
import {  v4 } from "uuid";

@Entity("clients")
export class Client {
    @AutoMap()
    @PrimaryColumn()
    public readonly id: string;
    @AutoMap()
    @Column()
    public name: string;
    @AutoMap()
    @Column()
    public gender: string;
    @AutoMap()
    @Column()
    public birthDate: Date;
    @AutoMap()
    @Column()
    public age: string;
    @AutoMap()
    @Column()
    public city: string;

    constructor(props: Omit<Client,'id'>, id?: string){
        Object.assign(this,props)

        if(!id) {
            this.id = v4()
        }
    }

}


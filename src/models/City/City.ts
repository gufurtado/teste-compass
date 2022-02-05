import { AutoMap } from "@automapper/classes";
import { Column, Entity, PrimaryColumn } from "typeorm";
import {  v4 } from "uuid";

@Entity("city")
export class City {
    @AutoMap()
    @PrimaryColumn()
    public readonly id: string;
    @AutoMap()
    @Column()
    public name: string;
    @AutoMap()
    @Column()
    public state: string;

    constructor(props: Omit<City,'id'>, id?: string){
        Object.assign(this,props)

        if(!id) {
            this.id = v4()
        }
    }

}


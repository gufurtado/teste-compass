import { AutoMap } from "@automapper/classes";

export class ClientCreateDTO {
    @AutoMap()
    name: string;
    @AutoMap()
    gender: string;
    @AutoMap()
    birthDate: Date;
    @AutoMap()
    age: string;
    @AutoMap()
    city: string;
}
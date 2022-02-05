import { AutoMap } from "@automapper/classes";

export class ClientReadDTO {
    @AutoMap()
    id: string;
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
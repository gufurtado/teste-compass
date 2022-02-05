import { AutoMap } from "@automapper/classes";

export class CityReadDTO {
    @AutoMap()
    id: string;
    @AutoMap()
    name: string;
    @AutoMap()
    state: string;
}
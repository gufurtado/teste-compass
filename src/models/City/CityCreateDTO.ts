import { AutoMap } from "@automapper/classes";

export class CityCreateDTO {
    @AutoMap()
    name: string;
    @AutoMap()
    state: string;
}
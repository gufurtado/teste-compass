import { City } from "../../models/City/City";
import { CityReadDTO } from "../../models/City/CityReadDTO";

export interface ICityRepository {
    findByName(name: string) : Promise<CityReadDTO>;
    findByState(state: string) : Promise<CityReadDTO[]>;
    save(city: City) : Promise<CityReadDTO>;
}
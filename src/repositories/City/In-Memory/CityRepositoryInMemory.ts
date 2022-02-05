import { City } from "../../../models/City/City";
import { CityReadDTO } from "../../../models/City/CityReadDTO";
import { mapper } from "../../../shared/profiles/City/City";
import { ICityRepository } from "../ICityRepository";

export class CityRepositoryInMemory implements ICityRepository{

    cities : City[] = []

    async findByName(name: string): Promise<CityReadDTO> {
        const city = this.cities.find(city => city.name === name)
        const cityReadDTO = mapper.map(city,CityReadDTO,City)
        return cityReadDTO
    }
    async findByState(state: string): Promise<CityReadDTO[]> {
        const cities = this.cities.filter(city => city.state === state)
        const citiesReadDTO = mapper.mapArray(cities,CityReadDTO,City)
        return citiesReadDTO
    }
    async save(city: City): Promise<CityReadDTO> {
        const newCity = new City(city)
        this.cities.push(newCity)
        const cityReadDTO = mapper.map(newCity,CityReadDTO,City)
        return cityReadDTO
    }

}
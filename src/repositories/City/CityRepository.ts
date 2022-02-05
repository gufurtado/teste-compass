import { getRepository, Repository } from "typeorm";
import { City } from "../../models/City/City";
import { CityCreateDTO } from "../../models/City/CityCreateDTO";
import { CityReadDTO } from "../../models/City/CityReadDTO";
import { mapper } from "../../shared/profiles/City/City";
import { ICityRepository } from "./ICityRepository";

export class CityRepository implements ICityRepository{
    private ormRepository: Repository<City> 

    constructor(){
        this.ormRepository = getRepository(City)
    }
    
    async findByName(name: string): Promise<CityReadDTO> {
    
        const city = await this.ormRepository.findOne({
            name: name
        })

        const cityReadDTO = mapper.map(city,CityReadDTO,City)

        return cityReadDTO
    }
    async findByState(state: string): Promise<CityReadDTO[]> {
        const cities = await this.ormRepository.find({
            state: state
        })

        const citiesReadDTO = mapper.mapArray(cities,CityReadDTO,City)

        return citiesReadDTO
        
    }
    async save(city: CityCreateDTO): Promise<CityReadDTO> {
        
        const savingCity = mapper.map(city,City,CityCreateDTO)
        
        await this.ormRepository.save(savingCity)

        const clientReadDTO = mapper.map(savingCity,CityReadDTO,City)

        return clientReadDTO
    }

}
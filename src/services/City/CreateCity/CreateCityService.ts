import { inject, injectable } from "tsyringe";
import { ICityRepository } from "../../../repositories/City/ICityRepository";
import { CityCreateDTO } from "../../../models/City/CityCreateDTO";
import { CityReadDTO } from "../../../models/City/CityReadDTO";
import { City } from "../../../models/City/City";

@injectable()
export class CreateCityService {

    private cityRepository : ICityRepository

    constructor(
        @inject('CityRepository')
        cityRepository : ICityRepository 
    ) {
        this.cityRepository = cityRepository
    }
    
    async execute(data: CityCreateDTO): Promise<CityReadDTO> {

        const cityAlreadyExists = await this.cityRepository.findByName(data.name)

        if (cityAlreadyExists) {
            throw new Error("City Already Exists!")
        }

        const city = new City(data)

        const newcity = await this.cityRepository.save(city);

        return newcity
    }
}
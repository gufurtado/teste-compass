import { inject, injectable } from "tsyringe";
import { CityReadDTO } from "../../../models/City/CityReadDTO";
import { ICityRepository } from "../../../repositories/City/ICityRepository";


@injectable()
export class GetCityByNameService {
    private cityRepository : ICityRepository

    constructor(
        @inject('CityRepository')
        cityRepository : ICityRepository 
    ) {
        this.cityRepository = cityRepository
    }

    async execute(name: string): Promise<CityReadDTO> {

        const cityExists = await this.cityRepository.findByName(name)

        if (!cityExists) {
            throw new Error("City not found!")
        }

        return cityExists
    }
}
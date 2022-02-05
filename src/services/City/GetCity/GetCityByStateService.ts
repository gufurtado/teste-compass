import { inject, injectable } from "tsyringe";
import { CityReadDTO } from "../../../models/City/CityReadDTO";
import { ICityRepository } from "../../../repositories/City/ICityRepository";


@injectable()
export class GetCityByStateService {
    private cityRepository : ICityRepository

    constructor(
        @inject('CityRepository')
        cityRepository : ICityRepository 
    ) {
        this.cityRepository = cityRepository
    }

    async execute(state: string): Promise<CityReadDTO[]> {

        const citiesExists = await this.cityRepository.findByState(state)

        if (citiesExists.length === 0) {
            throw new Error("No cities found!")
        }

        return citiesExists
    }
}
import { CityRepositoryInMemory } from "../../../repositories/City/In-Memory/CityRepositoryInMemory"
import { CreateCityService } from "./CreateCityService"

let createCityService : CreateCityService
let cityRepositoryInMemory : CityRepositoryInMemory
describe('Create a city', () => {
    beforeEach(() => {
        cityRepositoryInMemory = new CityRepositoryInMemory()
        createCityService = new CreateCityService(cityRepositoryInMemory)
    })

    it('should be able to create a city', async() => {
        const newCity = await createCityService.execute({
            name:"Cataguases",
            state:"MG"
        })

        expect(newCity).toHaveProperty("id")
    })
    it('should not be able to create a city', async() => {
        
        expect(async () => {
            await createCityService.execute({
                name:"Cataguases",
                state:"MG"
            })
            // Cidade com o mesmo nome
            await createCityService.execute({
                name:"Cataguases",
                state:"MG"
            })
        }).rejects.toBeInstanceOf(Error)
        
    })

})
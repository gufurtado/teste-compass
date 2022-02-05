import { CityRepositoryInMemory } from "../../../repositories/City/In-Memory/CityRepositoryInMemory"
import { CreateCityService } from "../CreateCity/CreateCityService"
import { GetCityByNameService } from "./GetCityByNameService"
import { GetCityByStateService } from "./GetCityByStateService"

let createCityService : CreateCityService
let cityRepositoryInMemory : CityRepositoryInMemory
let getCityByNameService : GetCityByNameService
let getCitiesByStateService : GetCityByStateService

describe('Get Cities by name or state',() => {
    beforeEach(() => {
        cityRepositoryInMemory = new CityRepositoryInMemory()
        createCityService = new CreateCityService(cityRepositoryInMemory)
        getCityByNameService = new GetCityByNameService(cityRepositoryInMemory)
        getCitiesByStateService = new GetCityByStateService(cityRepositoryInMemory)
    })

    it('Should be able to get a City By name', async() => {
        await createCityService.execute({
            name:"Cataguases",
            state:"MG"
        })

        const city = await getCityByNameService.execute('Cataguases')
        expect(city).toHaveProperty("id")
    })

    it('Should not be able to get a City By name', async() => {
        
        expect(async () => {
            await createCityService.execute({
                name:"Cataguases",
                state:"MG"
            })
            //Passando NOME que não existe na base em memória
            await getCityByNameService.execute('Juiz de Fora')
        }).rejects.toBeInstanceOf(Error)
    })

    it('Should be able to get Cities By State', async() => {
        await createCityService.execute({
            name:"Cataguases",
            state:"MG"
        })
        await createCityService.execute({
            name:"Juiz de Fora",
            state:"MG"
        })

        const cities = await getCitiesByStateService.execute('MG')
        expect(cities).toHaveLength(2)
    })

    it('Should not be able to get Cities By State', async() => {
        
        expect(async () => {
            await createCityService.execute({
                name:"Cataguases",
                state:"MG"
            })
            //Passando ESTADO que não existe na base em memória
            await getCitiesByStateService.execute('SP')
        }).rejects.toBeInstanceOf(Error)
    })
})
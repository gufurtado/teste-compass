import { ClientsRepositoryInMemory } from "../../../repositories/Client/In-Memory/ClientsRepositoryInMemory";
import { CreateClientService } from "../CreateClient/CreateClientService";
import { DeleteClientService } from "../DeleteClient/DeleteClientService";
import { GetClientByIdService } from "./GetClientByIdService";
import { GetClientByNameService } from "./GetClientByNameService";

let clientGetByIdService : GetClientByIdService
let clientGetByNameService : GetClientByNameService
let clientRepositoryInMemory : ClientsRepositoryInMemory
let clientCreateService : CreateClientService
let clientDeleteService : DeleteClientService

describe("Get a client by ID or Name", () => {
    beforeEach(()=> {
        clientRepositoryInMemory = new ClientsRepositoryInMemory()
        clientGetByIdService = new GetClientByIdService(clientRepositoryInMemory)
        clientGetByNameService = new GetClientByNameService(clientRepositoryInMemory)
        clientCreateService = new CreateClientService(clientRepositoryInMemory)
        clientDeleteService = new DeleteClientService(clientRepositoryInMemory)
    })

    it('Should get a client by Id', async () => {
        const clientCreated = await clientCreateService.execute({
            name: 'Gustavo',
            gender: "M",
            age: "22",
            birthDate: new Date('01/01/1999'),
            city: "Cataguases"
        })

        const clientFoundById = await clientGetByIdService.execute(clientCreated.id)
        expect(clientFoundById).toHaveProperty("id")
    })

    it('Should not get a client by ID', async () => {
        
        expect(async () => {
            const clientCreated = await clientCreateService.execute({
                name: 'Gustavo',
                gender: "M",
                age: "22",
                birthDate: new Date('01/01/1999'),
                city: "Cataguases"
            })
    
            await clientDeleteService.execute(clientCreated.id)
    
            await clientGetByIdService.execute(clientCreated.id)
        }).rejects.toBeInstanceOf(Error)      
    })

    it('Should get a client by Name', async () => {
        const clientCreated = await clientCreateService.execute({
            name: 'Gustavo',
            gender: "M",
            age: "22",
            birthDate: new Date('01/01/1999'),
            city: "Cataguases"
        })

        const clientFoundByName = await clientGetByNameService.execute(clientCreated.name)
        expect(clientFoundByName).toHaveProperty("id")
    })

    it('Should not get a client by Name', async () => {
        
        expect(async () => {
            const clientCreated = await clientCreateService.execute({
                name: 'Gustavo',
                gender: "M",
                age: "22",
                birthDate: new Date('01/01/1999'),
                city: "Cataguases"
            })
    
            await clientDeleteService.execute(clientCreated.id)
    
            await clientGetByNameService.execute(clientCreated.name)
        }).rejects.toBeInstanceOf(Error)      
    })

})
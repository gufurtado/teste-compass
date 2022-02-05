import { ClientsRepositoryInMemory } from "../../../repositories/Client/In-Memory/ClientsRepositoryInMemory";
import { CreateClientService } from "../CreateClient/CreateClientService";
import { DeleteClientService } from "../DeleteClient/DeleteClientService";
import { UpdateClientService } from "./UpdateClientService";

let clientRepositoryInMemory : ClientsRepositoryInMemory
let clientCreateService : CreateClientService
let clientDeleteService : DeleteClientService
let clientUpdateService : UpdateClientService

describe("Get a client by ID or Name", () => {
    beforeEach(()=> {
        clientRepositoryInMemory = new ClientsRepositoryInMemory()
        clientCreateService = new CreateClientService(clientRepositoryInMemory)
        clientDeleteService = new DeleteClientService(clientRepositoryInMemory)
        clientUpdateService = new UpdateClientService(clientRepositoryInMemory)
    })

    it('Should be able to update a client', async() => {
        const clientCreated = await clientCreateService.execute({
            name: 'Gustavo',
            gender: "M",
            age: "22",
            birthDate: new Date('01/01/1999'),
            city: "Cataguases"
        })
        const updatedClient = await clientUpdateService.execute(clientCreated.id, 'João')
        expect(updatedClient.name).toBe('João')
    })

    it('Should not be able to update a client', async() => {
        
        expect(async() => {
            const clientCreated = await clientCreateService.execute({
                name: 'Gustavo',
                gender: "M",
                age: "22",
                birthDate: new Date('01/01/1999'),
                city: "Cataguases"
            })
            await clientDeleteService.execute(clientCreated.id)
            await clientUpdateService.execute(clientCreated.id, 'João')
        }).rejects.toBeInstanceOf(Error)
          
    })

    
})
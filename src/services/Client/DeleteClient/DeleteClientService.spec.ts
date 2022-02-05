import { ClientsRepositoryInMemory } from "../../../repositories/Client/In-Memory/ClientsRepositoryInMemory"
import { CreateClientService } from "../CreateClient/CreateClientService"
import { DeleteClientService } from "./DeleteClientService"

let clientDeleteService : DeleteClientService
let clientCreateService : CreateClientService
let clientRepositoryInMemory : ClientsRepositoryInMemory

describe("Delete Client", () => {
    beforeEach(()=> {
        clientRepositoryInMemory = new ClientsRepositoryInMemory()
        clientDeleteService = new DeleteClientService(clientRepositoryInMemory)
    })
    it("Should be able to delete a client", async () => {
        
        expect( async () => {
            const clientCreated = await clientCreateService.execute({
                name: 'Gustavo',
                gender: "M",
                age: "22",
                birthDate: new Date('01/01/1999'),
                city: "Cataguases"
            })
    
            await clientDeleteService.execute(clientCreated.id)

            await clientRepositoryInMemory.findById(clientCreated.id)
        }).rejects.toBeInstanceOf(Error)
    })

    it("Should not be able to delete a client", async () => {
          
        expect( async () => {
            const clientCreated = await clientCreateService.execute({
                name: 'Gustavo',
                gender: "M",
                age: "22",
                birthDate: new Date('01/01/1999'),
                city: "Cataguases"
            })
    
            await clientDeleteService.execute(clientCreated.id)

            await clientDeleteService.execute(clientCreated.id)
        }).rejects.toBeInstanceOf(Error)
    })
})
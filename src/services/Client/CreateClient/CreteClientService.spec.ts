import { ClientsRepositoryInMemory } from "../../../repositories/Client/In-Memory/ClientsRepositoryInMemory"
import { CreateClientService } from "./CreateClientService"

let clientCreateService : CreateClientService
let clientRepositoryInMemory : ClientsRepositoryInMemory

describe("Create Client", () => {
    beforeEach(()=> {
        clientRepositoryInMemory = new ClientsRepositoryInMemory()
        clientCreateService = new CreateClientService(clientRepositoryInMemory)
    })
    it("Should be able to create a new client", async () => {

        const clientCreated = await clientCreateService.execute({
            name: 'Gustavo',
            gender: "M",
            age: "22",
            birthDate: new Date('01/01/1999'),
            city: "Cataguases"
        })
        expect(clientCreated).toHaveProperty("id")
    })

    it("Should not be able to create a new client with a name that already exists", async () => {

        expect(async () => {
            await clientCreateService.execute({
                name: 'Gustavo',
                gender: "M",
                age: "22",
                birthDate: new Date('01/01/1999'),
                city: "Cataguases"
            })
    
            await clientCreateService.execute({
                name: 'Gustavo',
                gender: "M",
                age: "22",
                birthDate: new Date('01/01/1999'),
                city: "Cataguases"
            })
        }).rejects.toBeInstanceOf(Error)        
    })
})
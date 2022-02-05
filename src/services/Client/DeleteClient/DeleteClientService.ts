import { inject, injectable } from "tsyringe";
import { IClientsRepository } from "../../../repositories/Client/IClientsRepository";

@injectable()
export class DeleteClientService {

    private clientsRepository : IClientsRepository

    constructor(
        @inject('ClientsRepository')
        clientsRepository : IClientsRepository 
    ) {
        this.clientsRepository = clientsRepository
    }
    
    async execute(id: string): Promise<void> {

        const clientExists = await this.clientsRepository.findById(id)
        
        if (!clientExists) {
            throw new Error("Client not found!")
        }

        await this.clientsRepository.delete(id)

        return
    }
}
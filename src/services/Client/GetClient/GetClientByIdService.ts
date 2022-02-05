import { inject, injectable } from "tsyringe";
import { ClientReadDTO } from "../../../models/Client/ClientReadDTO";
import { IClientsRepository } from "../../../repositories/Client/IClientsRepository";

@injectable()
export class GetClientByIdService {

    private clientsRepository : IClientsRepository

    constructor(
        @inject('ClientsRepository')
        clientsRepository : IClientsRepository 
    ) {
        this.clientsRepository = clientsRepository
    }
    
    async execute(id: string): Promise<ClientReadDTO> {

        const clientExists = await this.clientsRepository.findById(id)

        if (!clientExists) {
            throw new Error("Client not found!")
        }

        return clientExists
    }
}
import { inject, injectable } from "tsyringe";
import { Client } from "../../../models/Client/Client";
import { ClientReadDTO } from "../../../models/Client/ClientReadDTO";
import { IClientsRepository } from "../../../repositories/Client/IClientsRepository";
import { mapper } from "../../../shared/profiles/Clients/Clients";

@injectable()
export class UpdateClientService {

    private clientsRepository : IClientsRepository

    constructor(
        @inject('ClientsRepository')
        clientsRepository : IClientsRepository 
    ) {
        this.clientsRepository = clientsRepository
    }
    
    async execute(id: string, name : string): Promise<ClientReadDTO> {

        const clientExists = await this.clientsRepository.findById(id)

        if (!clientExists) {
            throw new Error("Client not found!")
        }

        clientExists.name = name  
        
        const updatedClient = await this.clientsRepository.updateById(id, mapper.map(clientExists,Client,ClientReadDTO))

        return updatedClient
    }
}
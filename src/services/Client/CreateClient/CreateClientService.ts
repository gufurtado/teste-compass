import { inject, injectable } from "tsyringe";
import { Client } from "../../../models/Client/Client";
import { ClientReadDTO } from "../../../models/Client/ClientReadDTO";
import { ClientCreateDTO } from "../../../models/Client/ClientCreateDTO";
import { IClientsRepository } from "../../../repositories/Client/IClientsRepository";

@injectable()
export class CreateClientService {

    private clientsRepository : IClientsRepository

    constructor(
        @inject('ClientsRepository')
        clientsRepository : IClientsRepository 
    ) {
        this.clientsRepository = clientsRepository
    }
    
    async execute(data: ClientCreateDTO): Promise<ClientReadDTO> {

        const clientAlreadyExists = await this.clientsRepository.findByName(data.name)

        if (clientAlreadyExists) {
            throw new Error("Client Already Exists!")
        }

        const client = new Client(data)

        const newClient = await this.clientsRepository.save(client);

        return newClient
    }
}
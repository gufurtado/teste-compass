import { Client } from "../../../models/Client/Client";
import { ClientReadDTO } from "../../../models/Client/ClientReadDTO";
import { mapper } from "../../../shared/profiles/Clients/Clients";
import { IClientsRepository } from "../IClientsRepository";


export class ClientsRepositoryInMemory implements IClientsRepository{

    clients : Client[] = []

    async findByName(name: string): Promise<ClientReadDTO> {
        const client = this.clients.find(client => client.name === name)
        const clientReadDTO = mapper.map(client,ClientReadDTO,Client)
        return clientReadDTO
    }
    async findById(id: string): Promise<ClientReadDTO> {
        const client = this.clients.find(client => client.id === id)
        const clientReadDTO = mapper.map(client,ClientReadDTO,Client)
        return clientReadDTO
    }
    async save(client: Client): Promise<ClientReadDTO> {
        const newClient = new Client(client);
        this.clients.push(newClient)
        const clientReadDTO = mapper.map(newClient,ClientReadDTO,Client) 
        return clientReadDTO
    }
    async delete(id: string): Promise<void> {
        this.clients = this.clients.filter(client => client.id !== id)
    }
    async updateById(id: string, client: Client): Promise<ClientReadDTO> {
        const index = this.clients.findIndex(client => client.id === id)
        Object.assign(this.clients[index],client)
        const clientReadDTO = mapper.map(this.clients[index],ClientReadDTO,Client) 
        return clientReadDTO
    }

}
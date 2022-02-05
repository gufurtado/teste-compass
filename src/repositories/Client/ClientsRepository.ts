import { getRepository, Repository } from "typeorm";
import { Client } from "../../models/Client/Client";
import { ClientReadDTO } from "../../models/Client/ClientReadDTO";
import { mapper } from "../../shared/profiles/Clients/Clients";
import { IClientsRepository } from "./IClientsRepository";

export class ClientsRepository implements IClientsRepository {
    private ormRepository: Repository<Client>

    constructor(){
        this.ormRepository = getRepository(Client)
    }

    async findByName(name: string): Promise<ClientReadDTO> {
        const client = await this.ormRepository.findOne({
            name: name
        })

        const clientReadDTO = mapper.map(client,ClientReadDTO,Client)

        return clientReadDTO 
    }
    async findById(id: string): Promise<ClientReadDTO> {
        const client = await this.ormRepository.findOne({
            id: id
        })
        const clientReadDTO = mapper.map(client,ClientReadDTO,Client)

        return clientReadDTO
    }
    async save(client: Client): Promise<ClientReadDTO> {

        await this.ormRepository.save(client)

        const clientReadDTO = mapper.map(client,ClientReadDTO,Client)

        return clientReadDTO
    }
    async delete(id: string): Promise<void> {
        await this.ormRepository.delete({
            id: id
        })
    }

    async updateById(id: string, client: Client): Promise<ClientReadDTO> {
        await this.ormRepository.update(id, client)

        const clientReadDTO = mapper.map(client,ClientReadDTO,Client)

        return clientReadDTO
    }


}
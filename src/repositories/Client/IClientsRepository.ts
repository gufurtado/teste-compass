import { Client } from "../../models/Client/Client";
import { ClientReadDTO } from "../../models/Client/ClientReadDTO";

export interface IClientsRepository {
    findByName(name: string) : Promise<ClientReadDTO>;
    findById(id: string) : Promise<ClientReadDTO>;
    save(client: Client) : Promise<ClientReadDTO>;
    delete(id: string) : Promise<void>;
    updateById(id: string, client: Client) : Promise<ClientReadDTO>;
}
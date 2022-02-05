import { container } from "tsyringe"
import { Request, Response } from "express";
import { UpdateClientService } from "../../services/Client/UpdateClient/UpdateClientService";

export class UpdateClientController {
   
    async handle(request : Request, response : Response) : Promise<Response>{
        const id = request.params.id
        const {name} = request.body
        
        const updateClientService = container.resolve(UpdateClientService)

        try {
            const updatedClient = await updateClientService.execute(id, name)
            return response.status(200).json(updatedClient)

        } catch(err){
            return response.status(404).json({
                message: err.message || "Unexpected Error"
            })
        }
    }
}
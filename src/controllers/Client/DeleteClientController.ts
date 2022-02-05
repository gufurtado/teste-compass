import { container } from "tsyringe"
import { Request, Response } from "express";
import { DeleteClientService } from "../../services/Client/DeleteClient/DeleteClientService";

export class DeleteClientController {
   
    async handle(request : Request, response : Response) : Promise<Response>{
        const id = request.params.id
        
        const deleteClientService = container.resolve(DeleteClientService)

        try {
            await deleteClientService.execute(id)
            return response.status(204).send()

        } catch(err){
            return response.status(404).json({
                message: err.message || "Unexpected Error"
            })
        }
    }
}
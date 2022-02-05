import { container } from "tsyringe"
import { Request, Response } from "express";
import { GetClientByIdService } from "../../services/Client/GetClient/GetClientByIdService"

export class GetClientByIdController {
   
    async handle(request : Request, response : Response) : Promise<Response>{
        const id = request.params.id
        
        const getClientByIdService = container.resolve(GetClientByIdService)

        try {
            const client = await getClientByIdService.execute(id)
            return response.status(200).json(client)

        } catch(err){
            return response.status(404).json({
                message: err.message || "Unexpected Error"
            })
        }
    }
}
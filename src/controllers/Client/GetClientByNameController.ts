import { container } from "tsyringe"
import { Request, Response } from "express";
import { GetClientByNameService } from "../../services/Client/GetClient/GetClientByNameService"

export class GetClientByNameController {
   
    async handle(request : Request, response : Response) : Promise<Response>{
        const name = request.params.name
        
        const getClientByNameService = container.resolve(GetClientByNameService)
        try {
            const client = await getClientByNameService.execute(name)
            return response.status(200).json(client)

        } catch(err){
            return response.status(404).json({
                message: err.message || "Unexpected Error"
            })
        }
    }
}
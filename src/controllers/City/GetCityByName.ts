import { container } from "tsyringe"
import { Request, Response } from "express";
import { GetCityByNameService } from "../../services/City/GetCity/GetCityByNameService";

export class GetCityByNameController {
   
    async handle(request : Request, response : Response) : Promise<Response>{
        const name = request.params.name
        
        const getCityByNameService = container.resolve(GetCityByNameService)
        try {
            const city = await getCityByNameService.execute(name)
            return response.status(200).json(city)

        } catch(err){
            return response.status(404).json({
                message: err.message || "Unexpected Error"
            })
        }
    }
}
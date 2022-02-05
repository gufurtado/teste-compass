import { container } from "tsyringe"
import { Request, Response } from "express";
import { GetCityByStateService } from "../../services/City/GetCity/GetCityByStateService";

export class GetCityByStateController {
   
    async handle(request : Request, response : Response) : Promise<Response>{
        const name = request.params.name
        
        const getCityByStateService = container.resolve(GetCityByStateService)
        try {
            const cities = await getCityByStateService.execute(name)
            return response.status(200).json(cities)

        } catch(err){
            return response.status(404).json({
                message: err.message || "Unexpected Error"
            })
        }
    }
}
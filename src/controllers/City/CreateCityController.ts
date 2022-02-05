import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCityService } from "../../services/City/CreateCity/CreateCityService";


export class CreateCityController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { name, state } = request.body

        const createCityService = container.resolve(CreateCityService)
        
        try {
            const newCity = await createCityService.execute({
                name,
                state
            })

            return response.status(201).json(newCity)
        } catch (err) {
            return response.status(400).json({
                message: err.message || "Unexpected Error"
            })
        }       
    }
}
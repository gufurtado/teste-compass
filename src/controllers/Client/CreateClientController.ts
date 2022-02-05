import { Request, Response } from "express";
import { container } from "tsyringe";
import {CreateClientService} from '../../services/Client/CreateClient/CreateClientService'

export class CreateClientController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { name, gender, birthDate, age, city } = request.body

        const createClientService = container.resolve(CreateClientService)
        
        try {
            const newClient = await createClientService.execute({
                name,
                gender,
                birthDate,
                age,
                city
            })

            return response.status(201).json(newClient)
        } catch (err) {
            return response.status(400).json({
                message: err.message || "Unexpected Error"
            })
        }       
    }
}
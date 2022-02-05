import { Router } from "express";
import { CreateCityController } from "./controllers/City/CreateCityController";
import { GetCityByNameController } from "./controllers/City/GetCityByName";
import { GetCityByStateController } from "./controllers/City/GetCityByState";
import { CreateClientController } from "./controllers/Client/CreateClientController";
import { DeleteClientController } from "./controllers/Client/DeleteClientController";
import { GetClientByIdController } from "./controllers/Client/GetClientByIdController";
import { GetClientByNameController } from "./controllers/Client/GetClientByNameController";
import { UpdateClientController } from "./controllers/Client/UpdateClientController";


const router = Router()

const createClientController = new CreateClientController()
const getClientByIdController = new GetClientByIdController()
const getClientByNameController = new GetClientByNameController()
const deleteClientController = new DeleteClientController()
const updateClientController = new UpdateClientController()
const cityCreateController = new CreateCityController()
const getCityByNameController = new GetCityByNameController()
const getCityByStateController = new GetCityByStateController()

router.post('/clients',createClientController.handle)

router.get('/clients/:id',getClientByIdController.handle)

router.get('/clients/name/:name',getClientByNameController.handle)

router.delete('/clients/:id',deleteClientController.handle)

router.put('/clients/:id',updateClientController.handle)

router.post('/city',cityCreateController.handle)

router.get('/city/name/:name',getCityByNameController.handle)

router.get('/city/state/:name',getCityByStateController.handle)


export { router }
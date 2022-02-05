import { container } from 'tsyringe';

//Cities Repository
import { CityRepository } from '../../repositories/City/CityRepository';
import { ICityRepository } from '../../repositories/City/ICityRepository';

// Users Repository
import {ClientsRepository} from '../../repositories/Client/ClientsRepository'
import {IClientsRepository} from '../../repositories/Client/IClientsRepository'

//Services
container.registerSingleton<IClientsRepository>(
  'ClientsRepository',
  ClientsRepository,
);

container.registerSingleton<ICityRepository>(
  'CityRepository',
  CityRepository
)
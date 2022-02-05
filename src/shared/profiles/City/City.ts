import { createMapper } from '@automapper/core'
import { classes } from '@automapper/classes'
import { City } from '../../../models/City/City'
import { CityReadDTO } from '../../../models/City/CityReadDTO'
import { CityCreateDTO } from '../../../models/City/CityCreateDTO'

export const mapper = createMapper({
    name: 'autoMapper',
    pluginInitializer: classes,
})

mapper.createMap(City,CityReadDTO)
mapper.createMap(CityReadDTO,City)
mapper.createMap(CityCreateDTO,City)

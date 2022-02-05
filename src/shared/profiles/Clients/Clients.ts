import { createMapper } from '@automapper/core'
import { classes } from '@automapper/classes'
import { Client } from '../../../models/Client/Client'
import { ClientReadDTO } from '../../../models/Client/ClientReadDTO'
import { ClientCreateDTO } from '../../../models/Client/ClientCreateDTO'

export const mapper = createMapper({
    name: 'autoMapper',
    pluginInitializer: classes,
})

mapper.createMap(Client,ClientReadDTO)
mapper.createMap(ClientCreateDTO, Client)
mapper.createMap(ClientReadDTO,Client)
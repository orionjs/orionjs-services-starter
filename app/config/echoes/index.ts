import {EchoesMap, startService} from '@orion-js/echoes'
import {services} from './services'
import logCreator from './logCreator'
// import {env} from '@orion-js/env'
import {logger} from '@orion-js/logger'

const brokers = process.env.KAFKA_BROKERS
  ? process.env.KAFKA_BROKERS.split(',')
  : []
const ssl = process.env.KAFKA_BROKERS_USE_SSL === 'true'

export default function startEchoes(echoes: EchoesMap) {
  if (brokers.length) {
    startService({
      client: {
        clientId: 'multiapp_clientid',
        brokers,
        ssl,
        logCreator,
      },
      consumer: {
        groupId: `this_service_name`,
      },
      producer: {},
      requests: {
        key: 'set a strong password here', // env.echoes_password,
        services,
      },
      echoes,
    })
  } else {
    logger.warn('KAFKA_BROKERS env not configured. Skipping echoes init.')
  }
}

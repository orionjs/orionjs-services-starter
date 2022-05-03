import components from 'app/controllers/http'
import home from './home'
import healthCheck from './healthCheck'
import {startServer, registerRoutes} from '@orion-js/http'
import {logger} from '@orion-js/logger'
import {env} from '@orion-js/env'

const routes = {
  ...components,
  home,
  healthCheck,
}

registerRoutes(routes)
startServer()
logger.info(`Server started at port ${env.http_port}`)

import './config/options'
import startEchoes from './config/echoes'
import startGraphQL from './config/graphql'
import startHttp from './config/http'
import startJobs from './config/jobs'

async function startApp() {
  startEchoes
  startGraphQL
  startHttp
  startJobs
}

startApp()

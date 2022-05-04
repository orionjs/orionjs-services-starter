import './config/options'
import startEchoes from './config/echoes'
import startGraphQL from './config/graphql'
import startHttp from './config/http'
import startJobs from './config/jobs'
import {mergeComponents} from '@orion-js/components'
import exampleComponent from './exampleComponent'

async function startApp() {
  const {echoes, resolvers, modelResolvers, routes, jobs} = mergeComponents([
    exampleComponent,
  ])

  startEchoes(echoes)
  startGraphQL(resolvers, modelResolvers)
  startHttp(routes)
  startJobs(jobs)
}

startApp()

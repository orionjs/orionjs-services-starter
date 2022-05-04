import {
  getServiceRoutes,
  Request,
  Route,
  RouteResponse,
  Routes,
} from '@orion-js/http'
import {Inject} from '@orion-js/services'
import {ExampleService} from 'app/services/ExampleService'

@Routes()
export class ExampleRoutes {
  @Inject()
  private exampleService: ExampleService

  @Route({
    path: '/example/:exampleId',
    method: 'get',
  })
  async example(req: Request): RouteResponse {
    const {exampleId} = req.params
    return {
      body: await this.exampleService.getAExample(exampleId),
    }
  }
}

export default getServiceRoutes(ExampleRoutes)

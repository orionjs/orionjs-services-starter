import {getServiceJobs, Jobs, RecurrentJob} from '@orion-js/dogs'
import {logger} from '@orion-js/logger'
import {Inject} from '@orion-js/services'
import {ExampleService} from 'app/services/ExampleService'

@Jobs()
export class ExampleJobs {
  @Inject()
  private exampleService: ExampleService

  @RecurrentJob({
    runEvery: 1000 * 60,
  })
  async createExamples() {
    logger.info('Creating example...')
    await this.exampleService.makeExample()
  }
}

export default getServiceJobs(ExampleJobs)

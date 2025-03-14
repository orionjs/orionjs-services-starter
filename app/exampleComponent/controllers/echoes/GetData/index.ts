import {EchoRequest, Echoes} from '@orion-js/echoes'
import {Inject} from '@orion-js/services'
import {ExampleRepository} from 'app/exampleComponent/repos/Example'
import {ExampleId, ExampleType} from 'app/exampleComponent/schemas/ExampleSchema'

@Echoes()
export class GetDataEchoes {
  @Inject(() => ExampleRepository)
  private exampleRepository: ExampleRepository

  @EchoRequest()
  async getDataById(params: {exampleId: ExampleId}): Promise<ExampleType> {
    return await this.exampleRepository.getExampleById(params.exampleId)
  }
}

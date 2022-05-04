import {Inject, Service} from '@orion-js/services'
import {ExampleRepository} from '../../repos/Example'
import {ExampleSchema} from '../../schemas/ExampleSchema'

@Service()
export class ExampleService {
  @Inject()
  private exampleRepository: ExampleRepository

  async getAExample(id: string): Promise<ExampleSchema> {
    return await this.exampleRepository.getExampleById(id)
  }

  async getExamples(): Promise<ExampleSchema[]> {
    return await this.exampleRepository.getAllExamples()
  }

  async makeExample() {
    const randomName = Math.random().toString(36).substring(7)
    await this.exampleRepository.createExample(randomName)
  }
}

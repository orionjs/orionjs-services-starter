import {Mutation, Query, Resolvers} from '@orion-js/graphql'
import {Inject} from '@orion-js/services'
import {Prop, TypedSchema} from '@orion-js/typed-model'
import {ExampleSchema} from 'app/example/schemas/ExampleSchema'
import {ExampleService} from 'app/example/services/ExampleService'

@TypedSchema()
export default class ExampleParams {
  @Prop()
  exampleId: string
}

@Resolvers()
export class ExampleResolvers {
  @Inject()
  private exampleService: ExampleService

  @Query({
    params: ExampleParams,
    returns: ExampleSchema,
  })
  async example(params: ExampleParams): Promise<ExampleSchema> {
    return await this.exampleService.getAExample(params.exampleId)
  }

  @Query({
    returns: [ExampleSchema],
  })
  async examples(): Promise<ExampleSchema[]> {
    return await this.exampleService.getExamples()
  }

  @Mutation({returns: String})
  async createExample(): Promise<string> {
    await this.exampleService.makeExample()
    return 'Created example'
  }
}

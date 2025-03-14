import {Mutation, Query, ResolverParams, ResolverReturns, Resolvers} from '@orion-js/graphql'
import {Inject} from '@orion-js/services'
import {Prop, TypedSchema} from '@orion-js/typed-model'
import {ExampleId, ExampleSchema, ExampleType} from 'app/exampleComponent/schemas/ExampleSchema'
import {ExampleService} from 'app/exampleComponent/services/ExampleService'

@TypedSchema()
export class ExampleParams {
  @Prop({type: String})
  exampleId: ExampleId
}

@Resolvers()
export default class ExampleResolvers {
  @Inject(() => ExampleService)
  private exampleService: ExampleService

  @Query()
  @ResolverParams(ExampleParams)
  @ResolverReturns(ExampleSchema)
  async example(params: ExampleParams): Promise<ExampleType> {
    return await this.exampleService.getAExample(params.exampleId)
  }

  @Query()
  @ResolverReturns([ExampleSchema])
  async examples(): Promise<ExampleType[]> {
    return await this.exampleService.getExamples()
  }

  @Mutation()
  @ResolverReturns(String)
  async createExample(): Promise<string> {
    await this.exampleService.makeExample()
    return 'Created example'
  }
}

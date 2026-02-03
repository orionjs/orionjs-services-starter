import {Procedures, TQuery, TMutation, createTQuery, createTMutation} from '@orion-js/trpc'
import {Inject} from '@orion-js/services'
import {ExampleSchema} from 'app/exampleComponent/schemas/ExampleSchema'
import {ExampleService} from 'app/exampleComponent/services/ExampleService'
import {typedId} from '@orion-js/mongodb'

@Procedures()
export class ExampleProcedures {
  @Inject(() => ExampleService)
  private exampleService: ExampleService

  @TQuery()
  getExample = createTQuery({
    params: {exampleId: {type: typedId('ex')}},
    returns: ExampleSchema,
    resolve: async ({exampleId}) => {
      return await this.exampleService.getAExample(exampleId)
    },
  })

  @TQuery()
  listExamples = createTQuery({
    returns: [ExampleSchema],
    resolve: async () => {
      return await this.exampleService.getExamples()
    },
  })

  @TMutation()
  createExample = createTMutation({
    returns: {message: {type: 'string'}},
    resolve: async () => {
      await this.exampleService.makeExample()
      return {message: 'Created example'}
    },
  })
}

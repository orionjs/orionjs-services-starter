import {
  getServiceModelResolvers,
  ModelResolver,
  ModelResolvers,
} from '@orion-js/graphql'
import {ExampleSchema} from 'app/schemas/ExampleSchema'

@ModelResolvers(ExampleSchema)
export class ExampleResolvers {
  @ModelResolver({
    returns: String,
  })
  async text(): Promise<string> {
    return 'Hello World'
  }
}

export default getServiceModelResolvers(ExampleResolvers)

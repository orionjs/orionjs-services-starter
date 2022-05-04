import {ModelResolver, ModelResolvers} from '@orion-js/graphql'
import {ExampleSchema} from 'app/example/schemas/ExampleSchema'

@ModelResolvers(ExampleSchema)
export default class ExampleResolvers {
  @ModelResolver({
    returns: String,
  })
  async text(): Promise<string> {
    return 'Hello World'
  }
}

import {ModelResolver, ModelResolvers} from '@orion-js/graphql'
import {ExampleSchema} from 'app/exampleComponent/schemas/ExampleSchema'

@ModelResolvers(ExampleSchema)
export default class ExampleModelResolvers {
  @ModelResolver({
    returns: String,
  })
  async text(): Promise<string> {
    return 'Hello World'
  }
}

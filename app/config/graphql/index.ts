import {
  resolversSchemas,
  startGraphQL as orionStartGraphQL,
} from '@orion-js/graphql'

export default function startGraphQL(resolvers, modelsResolvers) {
  orionStartGraphQL({
    resolvers: {
      ...resolvers,
      ...resolversSchemas,
    },
    modelsResolvers,
    useGraphiql: !!process.env.ORION_DEV, // show graphiql only in dev
  })
}

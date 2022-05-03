import {resolversSchemas, startGraphQL} from '@orion-js/graphql'
import resolvers from 'app/controllers/resolvers'
import modelsResolvers from 'app/controllers/models'

startGraphQL({
  resolvers: {
    ...resolvers,
    ...resolversSchemas,
  },
  modelsResolvers,
  useGraphiql: !!process.env.ORION_DEV, // show graphiql only in dev
})

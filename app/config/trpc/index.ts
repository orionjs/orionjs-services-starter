import {startTRPC} from '@orion-js/trpc'
import {logger} from '@orion-js/logger'
import {appRouter} from 'app/router'

export default async function startTrpc() {
  await startTRPC({
    router: appRouter,
    path: '/trpc',
  })

  logger.info('tRPC started at /trpc')

  return {router: appRouter}
}

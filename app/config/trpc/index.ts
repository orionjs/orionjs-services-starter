import {startTRPC} from '@orion-js/trpc'
import {TRPCRouterRecord} from '@trpc/server'
import {logger} from '@orion-js/logger'

export default async function startTrpc(procedures: TRPCRouterRecord) {
  if (!procedures || Object.keys(procedures).length === 0) {
    return {router: undefined}
  }

  const {router} = await startTRPC({
    procedures,
    path: '/trpc',
  })

  logger.info('tRPC started at /trpc')

  return {router}
}

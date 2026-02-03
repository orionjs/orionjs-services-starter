/**
 * Typed tRPC router for client usage.
 *
 * Import this type in your client code to get full type safety:
 *
 * @example
 * // In your client code
 * import type { AppRouter } from 'app/router'
 * import { createTRPCClient } from '@trpc/client'
 *
 * const client = createTRPCClient<AppRouter>({
 *   links: [httpBatchLink({ url: 'http://localhost:3010/trpc' })]
 * })
 *
 * // Now client has full type inference!
 * const user = await client.getExample.query({ exampleId: 'ex_123' })
 */
import {buildRouter, mergeProcedures} from '@orion-js/trpc'
import {ExampleProcedures} from './exampleComponent/controllers/trpc/ExampleProcedures'

// Merge all procedure classes with preserved types
const procedures = mergeProcedures([ExampleProcedures])

// Build the router
export const appRouter = buildRouter(procedures)

// Export the router type for client usage
export type AppRouter = typeof appRouter

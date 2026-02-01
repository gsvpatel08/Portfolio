import { AngularAppEngine, createRequestHandler } from '@angular/ssr'
import { getContext } from '@netlify/angular-runtime/context'

const angularAppEngine = new AngularAppEngine()

export async function netlifyAppEngineHandler(
  request: Request
): Promise<Response> {
  const context = getContext()
  const result = await angularAppEngine.handle(request, context)
  return result || new Response('Not Found', { status: 404 })
}

/**
 * Request handler used by Angular CLI (dev-server & build)
 */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler)

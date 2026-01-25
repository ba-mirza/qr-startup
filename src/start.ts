import { createMiddleware, createStart } from "@tanstack/react-start";

const loggingMiddleware = createMiddleware({ type: 'function' })
  .server(async ({ next }) => {
    console.log('globalMiddleware1')
    return next()
  })

export const startInstance = createStart(() => {
  return {
    functionMiddleware: [loggingMiddleware]
  }
})

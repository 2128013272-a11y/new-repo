// Minimal Host-only DSH plugin.
// `inject` makes activate wait until the `tools` service exists.
export const inject = ['tools']

export function apply(ctx) {
  // ctx.effect returns a disposer, so the tool is unregistered when the row unloads.
  ctx.effect(() =>
    ctx.tools.register({
      name: 'new_repo_ping',
      description: 'Return a greeting from the dsh-new-repo plugin.',
      parameters: {
        type: 'object',
        properties: {},
        additionalProperties: false,
      },
      output: {
        schema: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
          additionalProperties: false,
        },
        render(_args, value) {
          return [{ type: 'text', text: value.message }]
        },
      },
      async execute() {
        return { message: 'pong from @2128013272-a11y/dsh-new-repo' }
      },
    }),
  )
}

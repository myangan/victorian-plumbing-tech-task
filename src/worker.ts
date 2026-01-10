/// <reference types="@cloudflare/workers-types" />

export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request)
  },
} satisfies ExportedHandler<{ ASSETS: Fetcher }>

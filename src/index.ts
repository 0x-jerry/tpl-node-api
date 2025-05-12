import 'dotenv/config'
import { serve } from '@hono/node-server'
import { app } from './app'

serve(
  {
    port: 3560,
    fetch: app.fetch,
  },
  (info) => {
    console.log('service serve at:', `http://localhost:${info.port}`)
  },
)

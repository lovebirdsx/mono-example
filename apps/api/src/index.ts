import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { formatMoney } from '@acme/shared'

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    message: 'Acme API',
    demo: {
      price_usd: formatMoney(49.99),
      price_eur: formatMoney(129.0, 'EUR'),
    },
    timestamp: new Date().toISOString(),
  })
})

app.get('/health', (c) => {
  return c.json({ status: 'ok' })
})

const PORT = Number(process.env['PORT'] ?? 3001)

serve(
  { fetch: app.fetch, port: PORT },
  (info) => {
    console.log(`API running → http://localhost:${info.port}`)
  },
)

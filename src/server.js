import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { pg } from './db.js'

import invitationRoutes from './routes/invitations.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/invitations', invitationRoutes)
app.use('/api/ping', (_req, res) => {
  res.json({ message: 'Test after GH actions deploy to Cloud Run' })
})

const PORT = process.env.PORT || 3000

/* eslint-disable no-console */
;(async () => {
  try {
    await pg.migrate.latest()
    console.log('Migrations are up to date.')

    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  } catch (err) {
    console.error('Migration failed:', err)
    process.exit(1)
  }
})()

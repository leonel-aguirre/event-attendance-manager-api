import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import invitationRoutes from './routes/invitations.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/invitations', invitationRoutes)

const PORT = process.env.PORT || 3000

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

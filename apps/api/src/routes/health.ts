import express from 'express'
import { Response, Request } from 'express'

const router = express.Router()

router.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' })
})

export default router
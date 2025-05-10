import { Router } from "express"

const router = Router()

import {
  createInvitation,
  checkIn,
} from "../controllers/invitationController.js"

router.post("/", createInvitation)
router.post("/check-in", checkIn)

export default router

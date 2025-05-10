import Invitation from "../models/invitationModel.js"

export const createInvitation = async (req, res, next) => {
  try {
    const { name, email } = req.body
    const invitation = await Invitation.create({ name, email })

    res.status(201).json(invitation)
  } catch (err) {
    next(err)
  }
}

export const checkIn = async (req, res, next) => {
  try {
    const { code } = req.body
    const result = await Invitation.checkIn(code)

    if (!result) return res.status(404).json({ error: "Code not found" })
    res.json(result)
  } catch (err) {
    next(err)
  }
}

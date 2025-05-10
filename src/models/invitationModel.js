import { pg } from '../db.js'
import { generateCode } from '../utils/utils.js'

const create = async ({ name, email }) => {
  const [guest] = await pg('guests').insert({ name, email }).returning('*')

  const code = generateCode

  const [invitation] = await pg('invitations')
    .insert({
      guest_id: guest.id,
      code,
    })
    .returning('*')

  return { ...guest, code: invitation.code }
}

const checkIn = async (code) => {
  const [invitation] = await pg('invitations')
    .where({ code })
    .update({
      status: 'checked_in',
      checked_in_at: pg.fn.now(),
    })
    .returning('*')

  return invitation
}

export default {
  create,
  checkIn,
}

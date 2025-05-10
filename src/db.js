import knex from 'knex'
import knexfile from '../knexfile.js'

export const pg = knex(knexfile.development)

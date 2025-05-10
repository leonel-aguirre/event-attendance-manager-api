const knex = require("knex")
const knexfile = require("./knexfile")

const pg = knex(knexfile.development)

const guests = [
  { name: "Alice Johnson", email: "alice@example.com" },
  { name: "Bob Smith", email: "bob@example.com" },
  { name: "Carlos Díaz", email: "carlos@example.com" },
]

;(async () => {
  const result = await pg("guests").insert(guests)

  console.log({ result })
})()

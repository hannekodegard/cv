const express = require('express')
const app = express()

require('dotenv').config()

const mysql = require('mysql')
const util = require('util')
const conn = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
})
const query = util.promisify(conn.query).bind(conn)

app.get('/', (req, res, next) => {
  res.send('API root')
})

app.get('/cv', async (rec, res) => {
  const rows = await query('SELECT * FROM `info` ORDER BY `id` ASC')
  const info = {
    name: '',
    birthday: '',
    number: 0,
    email: '',
    website: '',
    links: [],
  }
  rows.forEach(({ content, type, link }) => {
    switch (type) {
      case 'name':
        cv.name = content
        break
      case 'birthday':
        cv.birthday = content
        break
      case 'adress':
        cv.adress = content
        break
      case 'number':
        cv.number = content
        break
      case 'email':
        cv.email = content
        break
      case 'website':
        cv.website = [content, link]
        break
      case 'link':
        cv.links.push([content, link])
    }
  })

  const key_qualifications = {}
  const education = []
  const volenteer_work = []
  const other = []

  res.send(
    JSON.stringify({
      info,
      key_qualifications,
      education,
      volenteer_work,
      other,
    })
  )
})

// export the server middleware
module.exports = {
  path: '/api',
  handler: app,
}

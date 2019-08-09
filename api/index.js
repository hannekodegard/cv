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
  const cv = {
    info: {
      name: '',
      birthday: '',
      number: 0,
      email: '',
      website: '',
      links: [],
    },
    key_qualifications: {},
    education: [],
    volenteer_work: [],
    other: [],
  }

  const infoTask = query('SELECT * FROM `info` ORDER BY `id` ASC')
  const educationTask = query(
    'SELECT * FROM `education` ORDER BY `startDate` ASC'
  )
  const [info, education] = await Promise.all([infoTask, educationTask])
  info.forEach(({ content, type, link }) => {
    switch (type) {
      case 'name':
        cv.info.name = content
        break
      case 'birthday':
        cv.info.birthday = content
        break
      case 'adress':
        cv.info.adress = content
        break
      case 'number':
        cv.info.number = content
        break
      case 'email':
        cv.info.email = content
        break
      case 'website':
        cv.info.website = [content, link]
        break
      case 'link':
        cv.info.links.push([content, link])
    }
  })
  education.forEach(({ school, type, startDate, endDate }) => {
    cv.education.push({ school, type, startDate, endDate })
  })
  res.send(JSON.stringify(cv))
})

// export the server middleware
module.exports = {
  path: '/api',
  handler: app,
}

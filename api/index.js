const express = require('express')
const app = express()

require('dotenv').config()

app.get('/', (_, res) => {
  res.send('API root')
})

app.get('/cv', async (_, res) => {
  const mysql = require('mysql')
  const util = require('util')
  const conn = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  const query = util.promisify(conn.query).bind(conn)
  conn.connect()

  const cv = {
    info: {
      name: '',
      birthday: '',
      number: 0,
      email: '',
      website: '',
      links: {},
    },
    key_qualifications: {},
    skills: [],
    hobbies: [],
    work: [],
    education: [],
    volunteer_work: [],
  }

  const [
    info,
    education,
    work,
    hobbies,
    skills,
    volunteer_work,
  ] = await Promise.all([
    query('SELECT * FROM info ORDER BY id ASC'),
    query('SELECT * FROM education WHERE visible = 1 ORDER BY startDate DESC'),
    query('SELECT * FROM work ORDER BY startDate DESC'),
    query('SELECT * FROM hobbies ORDER BY rank ASC'),
    query('SELECT * FROM skills ORDER BY rank ASC'),
    query('SELECT * FROM volunteer_work ORDER BY startDate DESC'),
  ])
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
        cv.info.links = { ...cv.info.links, [content]: link }
    }
  })

  education.forEach(({ school, type, startDate, endDate }) => {
    cv.education.push({ school, type, startDate, endDate })
  })

  work.forEach(({ company, title, description, startDate, endDate }) => {
    cv.work.push({ company, title, description, startDate, endDate })
  })

  hobbies.forEach(({ hobby, logo }) => {
    cv.hobbies.push({ hobby, logo })
  })

  skills.forEach(({ skill, logo }) => {
    cv.skills.push({ skill, logo })
  })

  volunteer_work.forEach(
    ({ title, organisation, logo, description, startDate, endDate }) => {
      cv.volunteer_work.push({
        title,
        organisation,
        logo,
        description,
        startDate,
        endDate,
      })
    }
  )

  conn.end()
  res.send(JSON.stringify(cv))
})

// export the server middleware
module.exports = {
  path: '/api',
  handler: app,
}

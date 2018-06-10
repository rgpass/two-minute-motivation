const express = require('express') // web app server
const path = require('path') // Node module for access path
const compression = require('compression') // Enable gzip for extra small files
const favicon = require('serve-favicon') // Enable favicon
const sslRedirect = require('heroku-ssl-redirect') // Force Heroku to HTTPS

require('dotenv').config() // Enable .env file

const app = express()
const { PORT } = process.env

// Set up views and static assets
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(compression())
app.use(favicon(path.join(__dirname, 'favicon.ico')))

// Force users on Heroku to the SSL version
app.use(sslRedirect())

// Only need one route -- SPA FTW
app.get('*', (req, res) => {
  res.render('index')
})

// Emojis, oooh ahhh
app.listen(PORT, () => {
  console.log(`⚡️⚡️ Server started on port ${PORT}`)
})

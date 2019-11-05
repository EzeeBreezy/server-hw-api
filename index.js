const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/api', (req, res) => {
  res.sendFile(`${__dirname}/public/testApi.json`)
})

app.listen(4000, '0.0.0.0', () => {
    console.log("Express server started at http://0.0.0.0:4000")
})
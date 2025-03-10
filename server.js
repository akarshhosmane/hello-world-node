const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!-12')
})

app.listen(port, () => {
  console.log(`Example app12 listening at http://localhost:${port}`)
})

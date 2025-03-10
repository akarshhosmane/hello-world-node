const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!-17')
})

app.listen(port, () => {
  console.log(`Example app17 listening at http://localhost:${port}`)
})

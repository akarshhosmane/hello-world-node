const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!-4')
})

app.listen(port, () => {
  console.log(`Example app4 listening at http://localhost:${port}`)
})

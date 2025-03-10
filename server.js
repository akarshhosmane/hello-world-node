const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!-3')
})

app.listen(port, () => {
  console.log(`Example app3 listening at http://localhost:${port}`)
})

const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!-2')
})

app.listen(port, () => {
  console.log(`Example app2 listening at http://localhost:${port}`)
})

const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!-7')
})

app.listen(port, () => {
  console.log(`Example app7 listening at http://localhost:${port}`)
})

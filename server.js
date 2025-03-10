const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!-10')
})

app.listen(port, () => {
  console.log(`Example app10 listening at http://localhost:${port}`)
})

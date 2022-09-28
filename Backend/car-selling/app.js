const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hi World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
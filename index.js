const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const output = []
  res.json(output)
})

app.get('/source', (req, res) => {
  readJson('./data/route.json', (err, data) => {
    res.json(data)
  })
})

app.get('/example', (req, res) => {
  readJson('./data/example.json', (err, exampleData) => {
    res.json(exampleData)
  })
})

function readJson(path, cb) {
  fs.readFile(require.resolve(path), (err, data) => {
    if (err)
      cb(err)
    else
      cb(null, JSON.parse(data))
  })
}

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
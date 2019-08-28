const express = require('express')
const app = express()
const port = 3001
const getGallery = require('./gallery')

app.get('/rest/gallery', (req, res) => res.send(getGallery()))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
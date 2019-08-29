const express = require('express')
const path = require('path');
const app = express()
const port = process.env.PORT || 3001;
const getGallery = require('./gallery')

app.get('/rest/gallery', (req, res) => res.send(getGallery()))
app.use(express.static(path.join(__dirname, '../../build')))
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
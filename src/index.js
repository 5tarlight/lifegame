const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.set('port', 80)

app.use(cors())
app.use('/', express.static(path.join(__dirname, '/public')))

app.route('/').get((req, res) => res.redirect('/views/'))

app.listen(app.get('port'), () => {
  console.log('Server is ready')
})

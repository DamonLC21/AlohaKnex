const express = require('express')
const app = express()
const port = process.env.PORT || 3005
const bodyParser = require('body-parser')
const cors = require('cors')
const queries = require('./queries.js')

app.use(cors())
app.use(bodyParser.json())

app.listen(port, () =>{
    console.log(`listening on port ${port}`)
})

app.get('/', (req,res) => {
    res.send('Working')
})


app.get('/:id', (req,res) =>{
    queries.getById(req.params.id)
    .then(response => res.send(response))
})

app.post('/',(req,res) => {
    res.send('🍌')
    queries.create(req.body)
    .then(response => res.json({response}))
})





const express = require('express')
const app = express()

const port = process.env.PORT || 8081

app.get('/', (req, res)=> {
    res.send('Ok')
})

app.listen(port, ()=>{console.log('runnig on port: ', port)})


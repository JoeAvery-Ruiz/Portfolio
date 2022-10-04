const express = require('express')
const app = express()
/* const port = normalizePort( */process.env.PORT || '8000';
const port = 8000









app.get('/', (req, res)  => {
    res.json("welcome to JoeAvery's Portfolio")
})

app.listen(port, ()=>{
    console.log('Portfolio on',port)
})
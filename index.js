const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res)=>{
    res.send(`Travel guru app is running on the port ${port}`)
})

app.listen(port, ()=>{
    console.log(`Travel guru app is running on the port ${port}`)
});
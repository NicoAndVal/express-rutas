const express = require('express');
const app = express();

const data = [
    {
        id: 123,
        usuario:"user1"
    },
    {
        id: 124,
        usuario:"user2"
    },

]

 
app.get('/usuario', (req, res) => {
    res.json({
        data:data
    })
})

 

app.post('/usuario', (req, res) => {
    res.json({
        message:"Guardado"
    })
})

app.delete('/usuario/:id', (req, res) => {
    res.json({
         message:'Eliminado'
     })
})

app.put('/usuario/:id', (req, res) => {
    res.json({
        message:'Actualizado'
    })
})

module.exports = app;
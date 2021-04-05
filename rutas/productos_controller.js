const express = require('express');
const app = express();

const data = [
    {
        id: 123,
        categoria:'Polos',
        nombre:"polo rombos"
    },
    {
        id: 124,
        categoria:'Polos',
        nombre:"polo cuadrados"
    },

]

app.get('/producto', (req, res) => {
    res.json({
        data:data
    })
})

 

app.post('/producto', (req, res) => {
    res.json({
        message:"Guardado"
    })
})

app.delete('/producto/:id', (req, res) => {
    res.json({
         message:'Eliminado'
     })
})

app.put('/producto/:id', (req, res) => {
    res.json({
        message:'Actualizado'
    })
})

module.exports = app;
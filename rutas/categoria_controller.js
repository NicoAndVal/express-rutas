const express = require('express');
const app = express();

const data = [
    {
        id: 123,
        nombre:"POLOS"
    },
    {
        id: 124,
        nombre: "PANTALONES"
    }
]
 app.get('/categoria', (req, res) => {
    res.json({
        data:data
    })
})

 

app.post('/categoria', (req, res) => {
    res.json({
        message:"Guardado"
    })
})

app.delete('/categoria/:id', (req, res) => {
    res.json({
         message:'Eliminado'
     })
})

app.put('/categoria/:id', (req, res) => {
    res.json({
        message:'Actualizado'
    })
})
module.exports = app;
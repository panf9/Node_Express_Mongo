
const express = require('express');

const app = new express();

app.listen(4000, ()=>{
    console.log('El app esta haciendo listening en el puerto 4000');
})
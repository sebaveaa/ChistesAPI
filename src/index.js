const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000; // por agregar en proceess. env, averiguar como modificar

// TTest de get 
app.get("/", (req, res) => {
    res.send("<h2>Hola mundoOO desde get</h2>");
});

//Espera a un request a esta ruta (creo)
app.listen(PORT, () => {
    console.log(`API escuchando a puerto ${PORT}`);
});
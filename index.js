const express = require("express");
const app = express();

app.get("/:nome/:idade", (req, res) => {
   const {nome, idade} = req.params
   res.status(200).json({
      Usuario:`Nome: ${nome}, Idade:${idade}`
   })
});

app.get("/testar",(req, res) => {
    res.send("Olá Mundo!");
});

app.listen(3012,() => {
    console.log("Mauricio Servidor Ligado");

});
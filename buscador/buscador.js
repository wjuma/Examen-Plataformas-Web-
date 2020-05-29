const fs = require("fs"); // filesystem
//const srv = require("../vista/servidor");
const est = require("./controlador");
//const pag = require("./config/lista");
let tareaPorHAcer = [];

const publicar = (file, country, year) => {
    est
        .getE(file, country, year)
        .then((v) => v)
        .catch((msg) => console.log(msg.message));
};
const guardar = (file, country, year) => {
    est
        .getE(file, country, year)
        .then((v) => escribirjson(country, year, v))
        .catch((msg) => console.log(msg.message));
};
//Guardando en json
const escribirjson = (country, year, vect) => {
    let data = vect;
    fs.writeFile(`./resultados/${country}-${year}.txt`, data, (err) => {
        if (err) throw new Error("No se pudo grabar", err);
    });
    console.log(
        `\nEl archivo se a guardado exitodamente:/resultados ${country}-${year}`
        .magenta
    );
};

module.exports = {
    guardar,
    publicar,
};
const fs = require("fs"); // filesystem
//const srv = require("../vista/servidor");
const est = require("./controlador");
//const pag = require("./config/lista");
let tareaPorHAcer = [];

const publicar = (archivo, pais, anio) => {
    est
        .getE(archivo, pais, anio)
        .then((v) => v)
        .catch((msg) => console.log(msg.message));
};
const guardar = (archivo, pais, anio, guardar) => {
    est
        .getE(archivo, pais, anio)
        .then((v) => escribirtxt(pais, anio, v))
        .catch((msg) => console.log(msg.message));
};
//Guardando en json
const escribirtxt = (pais, anio, vect) => {
    let data = vect;
    fs.writeFile(`./resultados/${pais}-${anio}.txt`, data, (err) => {
        if (err) throw new Error("No se pudo grabar", err);
    });
    console.log(
        `\nEl archivo se a guardado exitodamente:/resultados ${pais}-${anio}`
        .magenta
    );
};
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        //si base no es un numero
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es numero`); // el rejct sigue ejecutnado
            return; // para que ya no siga ejecutantdo
        }
        // aqui guardamos nuestra tabla
        let data = "";
        for (let i = 1; i <= limite; i = i + 1) {
            data += `${base} * ${i} = ${base * i}\n`; //+= para concatenera
        }

        fs.writeFile(`tablas/tabla-${base}--al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`La tabla ${base}--al-${limite}.txt`);
        });
    });
};

module.exports = {
    guardar,
    publicar,
};
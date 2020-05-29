const colors = require("colors");
const fs = require("fs");
const csv = require("csv-parser");
let tareaPorHAcer = [];

const lecturacsv = async(archivo) => {
    //let vector = [];
    const g = fs
        .createReadStream(archivo)
        .on("error", (err) => console.log(err)) // Abrir archivo
        .pipe(csv({ cast: true, delimiter: ";" }));
    for await (const row of g) {
        //console.log(g.length);
        for (let i = 4; i < 65; i++) {
            if (row[i] == "" || row[i] == " " || row[i] == "") {
                row[i] = "0";
            }
        }
        tareaPorHAcer.push(row);
    }

    return "Se ha terminado de leer el archivo".green;
};

let getE = async(archivo, pais, anio) => {
    let vectotal = [];

    let doc = await lecturacsv(archivo);

    console.log(doc);
    let val = await validar(pais, anio);

    vectotal.push(await verXanio(archivo, anio, pais));

    return vectotal;
};

const validar = async(pais, anio) => {
    if (!Number(anio)) {
        throw new Error(`año ${anio} invalido`.red);
    }
    let i = 0;
    if (anio < 1960 || anio > 2019) throw new Error("Año no Encontrado".red);
    for (i = 4; i < tareaPorHAcer.length; i++) {
        if (pais === tareaPorHAcer[i][1]) {
            break;
        }
    }
    if (i == tareaPorHAcer.length)
        throw new Error("Codigo de Pais no encontrado".red);
};

const verXanio = async(archivo, anio, pais) => {
    let acum = 0;
    let tam = tareaPorHAcer.length - 4;
    vec = [];
    anio = (anio % 1960) + 4;
    p = 0;
    //PARA EL AÑO
    for (let i = 4; i < tareaPorHAcer.length; i++) {
        valor = parseInt(tareaPorHAcer[i][anio]);
        //vec.push(valor);
        for (let j = 0; j < tareaPorHAcer.length; j++) {
            val = tareaPorHAcer[j][2];
            val1 = tareaPorHAcer[j][4];
            val2 = tareaPorHAcer[j][0];
        }
    }

    let datos = {
        anio: tareaPorHAcer[3][anio],
        pais: tareaPorHAcer[0][pais],

        //media: parseInt(oper),
    };
    vec.push(datos);

    console.log("\n-------DATOS--------".red);
    console.log(`Datos: ${val}`.green);
    console.log(`Pais: ${val2}`);
    console.log(`Año: ${tareaPorHAcer[3][anio]} `.yellow);
    console.log(`Valor: ${val1}`);

    return vec;
};

module.exports = {
    getE,
};
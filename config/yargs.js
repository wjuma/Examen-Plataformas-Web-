const archivo = {
    demand: true,
    alias: "f",
    desc: "Archivo CSV con datos a procesar ",
};
const pais = {
    alias: "c",
    desc: "Código del país que se requiere información",
    default: "ECU",
};
const anio = {
    alias: "y",
    default: "1960",
    desc: "Año",
};
const guardar = {
    demand: true,
    alias: "g",
    desc: "Archivo txt",
};
const argv = require("yargs")
    .command("mostrar", "Se mostrara la busqueda realizada", {
        archivo,
        pais,
        anio,
    })
    .command("guardar", "Se guardara mi busqueda realizada", {
        archivo,
        pais,
        anio,
        guardar,
    }).argv;

module.exports = {
    argv,
};
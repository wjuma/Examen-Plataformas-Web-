const argv = require("./config/yargs.js").argv;
const buscar = require("./buscador/buscador.js");
let comando = argv._[0];

switch (comando) {
    case "mostrar":
        buscar.publicar(argv.archivo, argv.pais, argv.anio);
        break;
    case "guardar":
        buscar.guardar(argv.archivo, argv.pais, argv.anio, argv.guardar);
        break;
    default:
        console.log("Comando no reconocido");
}
let fraseAmor = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor.'

console.log(fraseAmor.match('amor'));

let desafio = 'No puedes terminar una oración con porque porque porque es una conjunción'

console.log(desafio.match('porque'));

let ingresoMes = 5000
let bonoAnual = 10000
let ingresoCursoMes = 15000

ingresoMes = ingresoMes * 12
ingresoCursoMes = ingresoCursoMes * 12

console.log(ingresoMes);
console.log(ingresoCursoMes);

ingresoAnuales = ingresoCursoMes + ingresoMes + bonoAnual

console.log(`El total de ingreso anual es de: ${ingresoAnuales}`);
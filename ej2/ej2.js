// Dado un arreglo de objetos de países que poseen dos propiedades: name y
// population, ordenarlos de mayor a menor en cuanto a su población utilizando la
// función de arreglo sort().
// Ejemplo de un objeto del arreglo: { name: Argentina, population: 458100000}

const countrys = [
  { name: "Argentina", population: 458100000 },
  { name: "Brasil", population: 4343434 },
  { name: "Portugal", population: 45000 },
  { name: "Uruguay", population: 4583433100000 },
  { name: "Bolivia", population: 4500 },
];

// Función de comparación personalizada para ordenar por población de manera descendente
const compararPorPoblacion = (a, b) => {
  return b.population - a.population;
};

// Ordenar los países de acuerdo a su población utilizando la función de comparación personalizada
const ordenarPaises = countrys.sort(compararPorPoblacion);

console.log(ordenarPaises);

const students = [-1, 2, 0, 7, 8, 9, 88, 67, 567];

const contarPresentes = students.filter((students) => students <= 0);

const cantidadPresentes = contarPresentes.length;

const contarAusentes = students.filter((students) => students > 0);

const cantidadAusentes = contarAusentes.length;

const decisionProfe = function (cantidadPresentes, cantidadAusentes) {
  if (cantidadPresentes > cantidadAusentes) {
    return "no, no se cancela la clase";
  } else {
    return "si, se cancela a la bosta todo";
  }
};

console.log(decisionProfe(cantidadPresentes, cantidadAusentes));

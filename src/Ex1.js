function taulerEscacs() {
  // El tauler es composa de 8 files i 8 columnes
  // Per cada fila, recorrem totes les columnes
  // Les files imparells comencen amb un espai
  // Les files parells comencen amb un #
  // Per saber si una fila és parell o imparell podem fer servir el mòdul %
  // Si la fila és parell i la columna és parell, posem un espai
  // Si la fila és parell i la columna és imparell, posem un #
  // Si la fila és imparell i la columna és parell, posem un #
  // Si la fila és imparell i la columna és imparell, posem un espai
  // La suma d'un nombre parell i un nombre imparell sempre és imparell
  // La suma de dos nombres parells sempre és parell

  let tauler = '';
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 == 0) {
        tauler += ' ';
      } else {
        tauler += '#';
      }
    }
    // Al final de cada fila, saltem de linia
    tauler += '\n';
  }
  return tauler;
  console.log(tauler);
}

module.exports = { taulerEscacs };

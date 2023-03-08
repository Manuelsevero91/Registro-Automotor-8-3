function getConsultarValor(val1, val2) {
    var fs = require('fs');
    var libros = fs.readFileSync('./matrix.json', "utf8");
    var matrix = JSON.parse(libros);
    return matrix[val1][val2];
}
console.log(getConsultarValor(0, 2));




function getConsultarValor(val1,val2){

        const fs = require ('fs')

        const libros = fs.readFileSync('./matrix.json', "utf8");
        const matrix = JSON.parse(libros)
     
          return matrix[val1][val2]
          

    }
    
 console.log(getConsultarValor(0, 2));

   

       
    

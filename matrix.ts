


function getConsultarValor(val1,val2){

        const fs = require ('fs')

        const libros = fs.readFileSync('./matrix.json', "utf8");
        const matrix = JSON.parse(libros)
     
          return matrix[1][1]
          

    }
    
 console.log(getConsultarValor(1,1));

   

       
    

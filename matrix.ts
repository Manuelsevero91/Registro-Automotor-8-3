

   export class Matriz{ 

        getConsultarValor(val1,val2): number{

        const fs = require ('fs')

        const libros = fs.readFileSync('./matrix.json', "utf8");
        const matrix = JSON.parse(libros)
     
          return matrix[val1][val2]
          
      console.log();
       
       
       
    }
     
  }
  
  let consultar = new Matriz;

 consultar.getConsultarValor(0, 1);

       
    

import Auto from "./auto";

/*Implemento clase RegistroAutomotor: con metodos consultar/borrar/actualizar/dar de alta/leer archivos*/
 class RegistroAutomotor  {
   
  consultar(modelo: string, array: Auto[]){
      let autoEncontrado = array.find(auto => modelo === modelo )
      if(autoEncontrado){
        console.log(modelo, ' Esta en el registro', autoEncontrado)
        return autoEncontrado
      } else{
        console.log(modelo, ' No esta en el registro');
        
      }

}
  borrar(modelo: string,array: Auto []): any{
    let autoEncontrado = array.findIndex(auto => modelo == modelo);
        if(autoEncontrado >= 0){  
            array.splice(autoEncontrado, 1)
            console.log('Auto borrado', modelo);
            console.log(array);
            return array;
        } else {

         console.log('Auto ', modelo, 'no se borro');
        }

  }
  
  actualizar(modelo: string, array: Auto[], dato: string){
    let autoActualizar = this.consultar(modelo, array)
    if(autoActualizar){
        modelo = dato;
        console.log(' El modelo del auto se actualizo, ahora su modelo es ', dato);
    }
    else {
        console.log('El modelo del auto no se actualizo');
        
    }
    
}

  darDeAlta(auto: Auto, array:Auto[]){
    if(array.push(auto)){
        console.log('Se dio de alta ',  ' al listado', array);
    } else{
        console.log('El auto',  ' No se ha podido dar de alta');
        
    }
}

  listadoAutos() {
     const fs = require ('fs')

     const datos = fs.readFileSync('./autos.json', "utf8");
     const autos = JSON.parse(datos)
  
       console.log(autos);
  
 
}

}
export default RegistroAutomotor;
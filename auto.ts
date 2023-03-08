import RegistroAutomotor from "./registro";

/*Defino clase auto */
class Auto  {
    private marca : string;
    private modelo : string;
    private anio : number;
    private motor : number;
    private origen : string;
 
     constructor (marca : string, modelo : string, anio : number, motor : number, origen : string){
         this.marca = marca;
         this.modelo = modelo;
         this.anio = anio;
         this.motor = motor; 
         this.origen = origen;
     }
 }
  export default Auto;
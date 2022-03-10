import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'primer_proyecto';
  descripcion = "Este es el ejercicio de prueba para aprender Angular"
  estaOculto = true;
  estaSeleccionado1 = false
  estaSeleccionado2 = true
  estaSeleccionado3 = false
  estaSeleccionado4 = false
  estaSeleccionado5 = true
  opcionMarcada : string = "No se sabe"
  setOption(event:Event){
    if((<HTMLInputElement>event.target).value == "Opcion1"){
      this.opcionMarcada = "Opcion1"
    } else{
      this.opcionMarcada = "Opcion2"
    }

  };
  saludo = "eyyy";
  saludar():void {
    alert(this.saludo);
  }
  saludar2(event:Event):void {
    event.stopPropagation();
    alert("Hemos evitado la propagacion, ya no se ejecutan los eventos de dentro");
  }
  textoParrafo:string = "Este parrafo tomará el valor del input"
  saludar3(texto:string){
    this.textoParrafo = texto;
  }

  nombre:string = ""

  nombre2:string="";
  tieneNombre:boolean = false;
  nombres:string[] = ["Pepe", "Maria", "Antonio"];
  setNombre(){
    this.tieneNombre = true;
    this.nombres.push(this.nombre2);
  }

  esNombreEspecial():boolean{
    return this.nombre2 == "antonio";
  }
  esNombreNormal():boolean{
    return this.nombre2.length > 5;
  }
}

import { Component } from '@angular/core';
import { Monster } from './monster.model';
import { Raza } from './monster.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monsterApp';
  myMonster:Monster;
  misMonstruos:Monster[] = [];

  crearMonstruos(nombre:string, vida:any, raza: string, ataque:any):void{
    let razaEscogida:Raza = Raza.orco;
    if(raza=="orco"){
      razaEscogida = Raza.orco;
    }
    if(raza=="enano"){
      razaEscogida = Raza.enano;
    }
    if(raza=="trasgo"){
      razaEscogida = Raza.trasgo;
    }
    if(raza=="elfo"){
      razaEscogida = Raza.elfo;
    }
    let vidaInt = parseInt(vida, 10);
    let ataqueInt = parseInt(ataque, 10);
    let monster:Monster = new Monster(nombre,vidaInt,razaEscogida,ataqueInt);
    this.misMonstruos.push(monster);


  }
  esOrcoTrasgo(monster:Monster){
    if(monster.raza == 'Orco' || monster.raza == 'Trasgo'){
      return true;
    } else{
      return false;
    }
  }


};

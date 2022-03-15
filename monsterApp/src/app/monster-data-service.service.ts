import { Injectable } from '@angular/core';
import { Monster, Raza } from './monster.model';

@Injectable({
  providedIn: 'root'
})
export class MonsterDataServiceService {
  monsters:Monster[] = [
    new Monster("Pepito", 1000, Raza.elfo, 50),
    new Monster("Ra", 9000, Raza.trasgo, 80),
    new Monster("Senu", 8000, Raza.enano, 70),
    new Monster("Leo", 7000, Raza.orco, 50)
  ];
  constructor() { }
  getMonsters():Monster[]{
    return this.monsters;
  }

  addMonster(monster:Monster){
    this.monsters.push(monster);
  }
  saludar():void {
    alert("Hola desde el servicio")
  }
}

export enum Raza {
  orco = "Orco",
  enano = "Enano",
  trasgo = "Trasgo",
  elfo = "Elfo"
}

export class Monster{
  nombre:string;
  vida:number=0;
  raza:Raza;
  ataque:number=0;
  constructor(nombre:string, vida:number, raza:Raza, ataque:number){
    this.nombre = nombre;
    this.vida = vida;
    this.raza = raza;
    this.ataque = ataque;
  }
  atacar():void{

  }
  atacarEspecial():void{

  }
}


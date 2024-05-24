export class Cliente {
    id: number=0;
    nombre: string | undefined;
    apellido: string | undefined;
    edad?: number = 0;
    cuit: string | undefined;
    isLive: boolean = false;
  
    constructor() {
      this.nombre = "-";
    }
  
    // fullName(): string {
    //   return `${this.nombre}, ${this.apellido}`;
    // }
  
    // edadToString(): string {
    //   return `${this.edad} años`;
    // }
  }
  
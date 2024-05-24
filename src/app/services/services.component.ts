import { Injectable } from "@angular/core";
import { Cliente } from "../model/cliente";

@Injectable({
    providedIn: 'root'
})

export class ClienteService {

    constructor() { }

    getClientes(): Cliente[] {
        return [
            {
                id: 123,
                apellido : 'Apeliido',
                cuit:'CUIT',
                edad:23,
                nombre: 'Nombre',
                isLive: true,
                
            },
            {
                id: 345,
                apellido : 'Apeliido',
                cuit:'CUIT',
                edad:23,
                nombre: 'Nombre',
                isLive: true,
                
            },
        ]
    }
}
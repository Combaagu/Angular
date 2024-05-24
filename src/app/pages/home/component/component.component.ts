import { Component } from '@angular/core';
import { ClienteService } from '../../../services/services.component';
import { Cliente } from '../../../model/cliente';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [],
  templateUrl: './component.component.html',
  styleUrl: './component.component.css'
})
export class ComponentComponent {

  clientes: Cliente[] = []

  constructor(service: ClienteService) {
    this.clientes = service.getClientes()

    let cliente = new Cliente()
    console.log(cliente)
  }

}

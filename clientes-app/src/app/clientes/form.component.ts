import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {

  cliente: Cliente = new Cliente();
  titulo: string = 'Formulario de Clientes';

  constructor(private clienteService: ClienteService, private router: Router) { }

  public create(): void {
    this.clienteService.create(this.cliente).subscribe(cliente => {
      this.router.navigate(['/clientes']);
      swal.fire('Nuevo cliente', `El cliente ${cliente.nombre} ha sido creado con éxito`, 'success');
    });
  }
}

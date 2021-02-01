import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nSelect Pipe
  persona = { nombre: 'Lucia', genero: 'F' }
  mapping = { 'M':'invitarlo', 'F':'invitarla' }

  cambiarPersona(){
    this.persona.nombre = 'Francisco';
    this.persona.genero = 'M'
  }


  //i18nPlural Pipe
  clientes:string[] = ['Juan', 'Maria', 'Pedro', 'Francisco'];
  clientesMap = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  eliminarCliente(){
    this.clientes.shift();
  }

    // JsonPipe
    heroes = [
      {
        nombre: 'Superman',
        vuela: true
      },
      {
        nombre: 'Robin',
        vuela: false
      },
      {
        nombre: 'Aquaman',
        vuela: false
      },
    ]

}

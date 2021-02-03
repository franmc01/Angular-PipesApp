import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  cambiar:boolean = true;

  heroes:Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Ironman',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'AntMan',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Black Widow',
      vuela: false,
      color: Color.negro
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
  nombreLower:string = 'francisco'
  nombreUpper:string = 'FRANCISCO'
  nombreCompleto:string = 'FranCisCO maRiN'
}



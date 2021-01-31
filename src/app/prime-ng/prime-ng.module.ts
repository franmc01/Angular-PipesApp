import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Módulos de PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CommonModule,
    CardModule,
    MenubarModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }

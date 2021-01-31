import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Módulos de PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';


@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CommonModule,
    CardModule,
    FieldsetModule,
    MenubarModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }

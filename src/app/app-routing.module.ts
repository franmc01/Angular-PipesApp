import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { BasicosComponent } from './practica/pages/basicos/basicos.component';
import { NumerosComponent } from './practica/pages/numeros/numeros.component';
import { OrdenarComponent } from './practica/pages/ordenar/ordenar.component';
import { NoComunesComponent } from './practica/pages/no-comunes/no-comunes.component';

const routes:Routes =[
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full'
  },
  {
    path: 'numeros',
    component:NumerosComponent
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent
  },
  {
    path:'ordenar',
    component: OrdenarComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

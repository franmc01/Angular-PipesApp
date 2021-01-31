import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

//Modulos personalizados
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { PracticaModule } from './practica/practica.module';

//Cambiar el locale de la app
import  localeEs  from "@angular/common/locales/es-EC";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    PracticaModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:'es-EC' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

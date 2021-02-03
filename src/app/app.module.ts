
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modulos personalizados
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { PracticaModule } from './practica/practica.module';

//Cambiar el locale de la app
import  localeEs  from "@angular/common/locales/es-EC";
import { registerLocaleData } from "@angular/common";
// import { OrdenarPipe } from './pipes/ordenar.pipe';
// import { VuelaPipe } from './pipes/vuela.pipe';


registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    // OrdenarPipe,
    // VuelaPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    PracticaModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:'es-EC' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

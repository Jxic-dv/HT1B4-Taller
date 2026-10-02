import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { LibroComponent } from './libro/libro.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { App } from './app';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibroComponent,
    PeliculaComponent,
    CiudadComponent
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }

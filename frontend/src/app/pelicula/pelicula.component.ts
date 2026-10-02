import { Component } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  standalone: true,
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.scss',
})
export class PeliculaComponent {
  titulo = 'Interestelar';
  director = 'Christopher Nolan';
  anio = 2014;
}
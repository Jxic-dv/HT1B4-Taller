import { Component } from '@angular/core';

@Component({
  selector: 'app-libro',
  standalone: true,
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.scss',
})
export class LibroComponent {
  titulo = 'El Principito';
  autor = 'Antoine de Saint-Exupéry';
  paginas = 96;
}
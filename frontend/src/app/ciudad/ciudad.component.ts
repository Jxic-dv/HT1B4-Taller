import { Component } from '@angular/core';

@Component({
  selector: 'app-ciudad',
  standalone: true,
  templateUrl: './ciudad.component.html',
  styleUrl: './ciudad.component.scss',
})
export class CiudadComponent {
  nombre = 'Ciudad de Guatemala';
  pais = 'Guatemala';
  habitantes = 1200000;
}
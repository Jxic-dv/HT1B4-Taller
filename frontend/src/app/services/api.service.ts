import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
// URL base del futuro backend 
  readonly baseUrl = 'http://localhost:3000/api';
}
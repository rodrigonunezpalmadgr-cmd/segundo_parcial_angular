import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Empleado {
  id: number;
  nombre: string;
  cargo: string;
  salario: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private apiUrl = 'https://tuservidor.com/api/empleados'; // 🔁 Cambia por tu URL real de la API

  constructor(private http: HttpClient) {}

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.apiUrl);
  }
}

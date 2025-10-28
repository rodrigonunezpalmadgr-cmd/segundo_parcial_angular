/*import { Component } from '@angular/core';

@Component({
  selector: 'app-empleados',
  imports: [],
  templateUrl: './empleados.html',
  styleUrl: './empleados.scss',
})
export class Empleados {

}*/
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosService, Empleado } from '../../services/empleados.service';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleados.html',
  styleUrl: './empleados.css'
})
export class EmpleadosComponent implements OnInit {
  empleados: Empleado[] = [];
  loading = true;
  error = '';

  constructor(private empleadosService: EmpleadosService) {}

  ngOnInit() {
    this.empleadosService.getEmpleados().subscribe({
      next: (data) => {
        this.empleados = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar empleados';
        console.error(err);
        this.loading = false;
      }
    });
  }
}



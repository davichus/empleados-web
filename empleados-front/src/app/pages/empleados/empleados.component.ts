import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { EmpleadosService } from '../../services/empleados/empleados.service';
import { EmpleadosModelLista } from '../../models/empleados/empleados-lista.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-empleados',
  imports: [RouterLink],
  templateUrl: './empleados.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmpleadosComponent {
  private empleadosService = inject(EmpleadosService);
  public empleados = signal<EmpleadosModelLista[]>([]);

  public obtenerEmpleados(): void {
    this.empleadosService.getEmpleados()
    .subscribe({    
      next: (response)=>{
        this.empleados.set(response.data);
      },
      error: (error)=>{
        console.error('Error al obtener empleados:', error);
      }}
    );
  }
  public constructor() {
    this.obtenerEmpleados();
  }
}

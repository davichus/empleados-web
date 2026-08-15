import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadosService } from '../../services/empleados/empleados.service';
import { EmpleadoNuevoModelo } from '../../models/empleados/empleado-nuevo.model';
import as from '@angular/common/locales/as';

@Component({
  selector: 'app-empleados-registro.component',
  imports: [ReactiveFormsModule],
  templateUrl: './empleados-registro.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmpleadosRegistroComponent {
  private formulario = inject(FormBuilder);
  private router = inject(Router);
  private empleadoService = inject(EmpleadosService);
   
  empleadoFormulario = this.formulario.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    profesion: ['', Validators.required],
    salario: [0, [Validators.required, 
                  Validators.min(1)]]
  });

  public guardar(): void {
    if(this.empleadoFormulario.invalid){
      this.empleadoFormulario.markAllAsTouched();
      return;
    }
    this.empleadoService.createEmpleado(
      this.empleadoFormulario.getRawValue() as EmpleadoNuevoModelo
    ).subscribe({
      next: (response)=> {
        alert(response.message);
        this.router.navigate(['/empleados']);
      },
       error: (error)=>{
        console.log(error);
       }
    });
  }
}

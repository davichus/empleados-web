import { Routes } from '@angular/router';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { EmpleadosRegistroComponent } from './pages/empleados-registro/empleados-registro.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'empleados',
        pathMatch: 'full'
    },
    {
        path: 'empleados',
        component: EmpleadosComponent
    },
    {
        path: 'empleados/registro',
        component: EmpleadosRegistroComponent
    },
    {
        path: '**',
        redirectTo: 'empleados'
    }
];

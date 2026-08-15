import { EmpleadoNuevoModelo } from './../../models/empleados/empleado-nuevo.model';
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core"
import { Observable } from "rxjs";
import { RespuestaApi } from "../../models/respuesta-api.model";
import { EmpleadosModelLista } from "../../models/empleados/empleados-lista.model";

@Injectable({
    providedIn: 'root'
})
export class EmpleadosService {
    private http = inject(HttpClient);
    private apiUrl= 'http://localhost:4000/api/empleados';

    public getEmpleados(): 
                Observable<RespuestaApi<EmpleadosModelLista[]>> {
        return this.http.
            get<RespuestaApi<EmpleadosModelLista[]>>(this.apiUrl);
    } 
    public getEmpleadoById(id: String)
           :Observable<RespuestaApi<EmpleadosModelLista>>{
            return this.http.
            get<RespuestaApi<EmpleadosModelLista>>
            (`${this.apiUrl}/${id}`);
    }

    public createEmpleado(empleado: EmpleadoNuevoModelo){
        return this.http.post<RespuestaApi<EmpleadoNuevoModelo>>
        (this.apiUrl, empleado);
    }

}
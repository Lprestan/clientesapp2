import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url:string='http://localhost:3000/Clientes';

  constructor(private http:HttpClient) { }

  /*obtener listado de clientes*/
  ObtenerClientes(){
    return this.http.get(this.url);
  }

  /*eliminar un registro*/
  EliminarCliente(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }

  ActualizarCliente(id:number,clienteupdate:any){
    return this.http.put(`${this.url}/${id}`,clienteupdate);
  }

}

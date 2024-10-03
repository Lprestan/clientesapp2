import { Component } from '@angular/core';
import { ClienteService } from '../Servicios/cliente.service';

@Component({
  selector: 'app-listadoclientes',
  templateUrl: './listadoclientes.component.html',
  styleUrl: './listadoclientes.component.css'
})
export class ListadoclientesComponent {

  Clientes:any;

  constructor(private servicios:ClienteService){}

  ngOnInit(): void {
    this.ListadoClientes();
  }

  ListadoClientes(){
    this.servicios.ObtenerClientes().subscribe((res:any)=>{
      this.Clientes=res;
      console.log(this.Clientes);
    })
  }
}

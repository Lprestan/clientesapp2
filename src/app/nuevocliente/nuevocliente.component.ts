import { Component } from '@angular/core';
import { ClienteService } from '../Servicios/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevocliente',
  templateUrl: './nuevocliente.component.html',
  styleUrl: './nuevocliente.component.css'
})
export class NuevoclienteComponent {

  id:any;
  idCliente:string;
  nombre:string;
  telefono:string;
  correo:string;

  mostrar=false;

  constructor(private servicios:ClienteService, private router:Router){}

  ngOnInit(): void {
    this.SiguienteId();
  }

  SiguienteId(){
    this.id = this.servicios.ObtenerClientes().subscribe((res:any)=>{
      this.id = res.length;
    })
  }

  AgregarCliente(){
    const nuevocliente={
      "id":String(this.id+1),
      "idCliente":this.idCliente,
      "nombre":this.nombre,
      "telefono":this.telefono,
      "correo":this.correo
    }
    this.servicios.AgregarCliente(nuevocliente).subscribe(
      res=>{this.LimpiarCampos();this.mostrar=true},
      error=>{alert("No se pudo agregar el nuevo cliente")}
    )
    setTimeout(()=>{
      this.router.navigate(['/listadoclientes']);
    },5000)

  }

  LimpiarCampos(){
    this.idCliente="";
    this.nombre="";
    this.telefono="";
    this.correo="";
  }



}

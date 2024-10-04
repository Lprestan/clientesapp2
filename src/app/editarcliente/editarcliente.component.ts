import { Component } from '@angular/core';
import { ClienteService } from '../Servicios/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editarcliente',
  templateUrl: './editarcliente.component.html',
  styleUrl: './editarcliente.component.css'
})
export class EditarclienteComponent {

  Cliente:any[]=[];
  id:any;
  idCliente:string;
  nombre:string;
  telefono:string;
  correo:string;

  actualizando=false;

  

  constructor(private servicios:ClienteService, private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.ObtenerCliente();
  }

  ObtenerCliente(){
    let id = this.route.snapshot.paramMap.get('id');
    this.servicios.ObtenerCliente(id).subscribe((res:any)=>{
      this.Cliente.push(res);
      this.id = this.Cliente[0].id;
      this.idCliente=this.Cliente[0].idCliente;
      this.nombre=this.Cliente[0].nombre;
      this.telefono=this.Cliente[0].telefono;
      this.correo=this.Cliente[0].correo;
    })
  }

  Actualizar(){
    const clienteupdate = {
      "idCliente":this.idCliente,
      "nombre":this.nombre,
      "telefono":this.telefono,
      "correo":this.correo
    }
    this.servicios.ActualizarCliente(this.id,clienteupdate).subscribe(
      res=>{this.actualizando=true},
      error=>{alert("El registro no se pudo actualizar")}
    )
    setTimeout(()=>{
      this.router.navigate(['/listadoclientes']);
    },5000)
  }





}

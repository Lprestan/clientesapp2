import { Component } from '@angular/core';
import { ClienteService } from '../Servicios/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eliminarcliente',
  templateUrl: './eliminarcliente.component.html',
  styleUrl: './eliminarcliente.component.css'
})
export class EliminarclienteComponent {

  id:any;

  constructor(private servicios:ClienteService, private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.EliminarCliente();
  }

  EliminarCliente(){
    this.servicios.EliminarCliente(this.id).subscribe(
      res=>{alert("El registro fue eliminado correctamente.! "),res},
      error=>{alert("El registro no pudo ser eliminado.! "),error}
    )
    setTimeout(()=>{
      this.router.navigate(['/listadoclientes']);
    },5000)
  }

}

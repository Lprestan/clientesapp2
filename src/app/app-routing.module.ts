import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoclienteComponent } from './nuevocliente/nuevocliente.component';
import { ListadoclientesComponent } from './listadoclientes/listadoclientes.component';
import { EditarclienteComponent } from './editarcliente/editarcliente.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { EliminarclienteComponent } from './eliminarcliente/eliminarcliente.component';

const routes: Routes = [
  {path:'',component:NuevoclienteComponent},
  {path:'nuevocliente',component:NuevoclienteComponent},
  {path:'listadoclientes',component:ListadoclientesComponent},
  {path:'editarcliente/:id',component:EditarclienteComponent},
  {path:'eliminarcliente/:id',component:EliminarclienteComponent},
  {path:'navegacion',component:NavegacionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

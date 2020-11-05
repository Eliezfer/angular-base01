import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmpBusquedaComponent } from './componente/cmp-busqueda/cmp-busqueda.component';
import { PagenotFoundComponent } from './componente/pagenot-found/pagenot-found.component';
import { PrincipalComponent } from './componente/principal/principal.component';

const routes: Routes = [
{ path: '', component: PrincipalComponent },
 { path: 'search', component: CmpBusquedaComponent,
  data: {
  title: 'Git Search'
  }
 },
 { path: '**', component: PagenotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

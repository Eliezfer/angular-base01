import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http'
import { SrvBusquedaService} from './services/srv-busqueda.service';
import { CmpBusquedaComponent } from './componente/cmp-busqueda/cmp-busqueda.component';
import { PrincipalComponent } from './componente/principal/principal.component';
import { PagenotFoundComponent } from './componente/pagenot-found/pagenot-found.component';
@NgModule({
  declarations: [
    AppComponent,
    CmpBusquedaComponent,
    PrincipalComponent,
    PagenotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SrvBusquedaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

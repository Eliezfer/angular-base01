import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http'
import { SrvBusquedaService} from './services/srv-busqueda.service';
import { CmpBusquedaComponent } from './componente/cmp-busqueda/cmp-busqueda.component';
@NgModule({
  declarations: [
    AppComponent,
    CmpBusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
